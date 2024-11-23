from datetime import datetime, timedelta
import jwt
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from fastapi import HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer
from app.models.users import User
from app.models.employees import Employee
from app.models.roles import Role
import logging

logger = logging.getLogger(__name__)    

# Cấu hình JWT
SECRET_KEY = "fuduweiii"
ALGORITHM = "HS256"             # Thuật toán mã hóa
ACCESS_TOKEN_EXPIRE_MINUTES = 60  # Thời gian hết hạn của token (60 phút)

# OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# Context mã hóa mật khẩu
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Xác minh mật khẩu do người dùng nhập.
    """
    return pwd_context.verify(plain_password, hashed_password)


def authenticate_user(db: Session, username: str, password: str):
    """
    Xác thực người dùng dựa trên username và password.
    :param db: Session kết nối cơ sở dữ liệu
    :param username: Tên đăng nhập của người dùng
    :param password: Mật khẩu của người dùng
    :return: User nếu thông tin hợp lệ, None nếu không hợp lệ
    """
    user = db.query(User).filter(User.Username == username).first()
    if not user:
        logger.warning(f"User '{username}' not found.")
        return None
    if not verify_password(password, user.Password):
        logger.warning(f"Invalid password for user '{username}'.")
        return None
    return user


def create_access_token(data: dict, expires_delta: timedelta = None) -> str:
    """
    Tạo JWT token chứa thông tin người dùng và vai trò.
    :param data: Thông tin cần mã hóa vào token (vd: username, role)
    :param expires_delta: Thời gian sống của token
    :return: JWT token
    """
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_token(token: str):
    """
    Giải mã và xác thực JWT token.
    :param token: JWT token cần xác thực
    :return: Payload chứa thông tin người dùng
    :raises HTTPException: Nếu token không hợp lệ hoặc đã hết hạn
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        role: str = payload.get("role")
        if username is None or role is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return {"username": username, "role": role}
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


def get_employee_info(db: Session, user: User):
    """
    Lấy thông tin đầy đủ của nhân viên dựa trên User.
    :param db: Session kết nối cơ sở dữ liệu
    :param user: Đối tượng User
    :return: Thông tin nhân viên và vai trò
    """
    employee = db.query(Employee).filter(
        Employee.UserID == user.UserID).first()
    role = db.query(Role).filter(Role.RoleID == user.RoleID).first()
    if not employee or not role:
        return None
    return {
        "employee_id": employee.EmployeeID,
        "name": employee.Name,
        "department": employee.Department,
        "position": employee.Position,
        "phone_number": employee.PhoneNumber,
        "address": employee.Address,
        "role": role.RoleName,
    }


def get_current_user(token: str = Depends(oauth2_scheme)):
    """
    Dependency: Lấy thông tin người dùng từ token.
    :param token: JWT token từ header Authorization
    :return: Thông tin người dùng (username, role)
    """
    return verify_token(token)
