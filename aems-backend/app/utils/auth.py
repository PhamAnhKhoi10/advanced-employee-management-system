from passlib.context import CryptContext
from sqlalchemy.orm import Session
from app.models.users import User
from app.models.employees import Employee
from app.models.roles import Role

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
    """
    user = db.query(User).filter(User.Username == username).first()
    if not user or not verify_password(password, user.Password):
        return None
    return user

def get_employee_info(db: Session, user: User):
    """
    Lấy thông tin đầy đủ của nhân viên dựa trên User.
    """
    employee = db.query(Employee).filter(Employee.UserID == user.UserID).first()
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
