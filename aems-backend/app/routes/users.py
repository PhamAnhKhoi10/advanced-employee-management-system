from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.users import User
from app.models.roles import Role
from app.schemas.users import UserCreate, UserUpdate, UserOut
from app.config.database import SessionLocal
from datetime import datetime, timezone

router = APIRouter()

# Dependency để lấy session database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

from fastapi import HTTPException, Depends
from sqlalchemy.exc import IntegrityError
from passlib.context import CryptContext

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/", response_model=UserOut)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    try:
        if user.RoleID <= 0:
            raise HTTPException(status_code=400, detail="Invalid RoleID")

        # Check if role exists
        role = db.query(Role).filter(Role.RoleID == user.RoleID).first()
        if not role:
            raise HTTPException(status_code=404, detail="Role not found")

        # Check if username exists
        existing_user = db.query(User).filter(User.Username == user.Username).first()
        if existing_user:
            raise HTTPException(status_code=400, detail="Username already registered")

        # Hash password
        hashed_password = pwd_context.hash(user.Password)

        new_user = User(
            Username=user.Username,
            Password=hashed_password,
            RoleID=user.RoleID,
            Email=user.Email,
            CreatedAt=str(datetime.now(timezone.utc)),
            UpdatedAt=str(datetime.now(timezone.utc)),
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        # Trả về UserID để sử dụng khi tạo Employee
        return new_user

    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Database integrity error")
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))


# API để lấy thông tin user theo ID
@router.get("/{user_id}", response_model=UserOut)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.UserID == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# API để lấy tất cả người dùng
@router.get("/", response_model=list[UserOut])
def get_all_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users

# API để cập nhật thông tin user
@router.put("/{user_id}", response_model=UserOut)
def update_user(user_id: int, user: UserUpdate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.UserID == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")

    if user.Password:
        db_user.Password = user.Password
    if user.RoleID:
        db_user.RoleID = user.RoleID
    if user.Email:
        db_user.Email = user.Email
    db_user.UpdatedAt = user.UpdatedAt

    db.commit()
    db.refresh(db_user)
    return db_user

# API để xóa user
@router.delete("/{user_id}", response_model=dict)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    try:
        # Kiểm tra User có tồn tại không
        db_user = db.query(User).filter(User.UserID == user_id).first()
        if not db_user:
            raise HTTPException(
                status_code=404,
                detail=f"User with ID {user_id} does not exist"
            )

        # Xóa Employee liên kết nếu có
        if db_user.employee:
            db.delete(db_user.employee)

        # Xóa User
        db.delete(db_user)
        db.commit()
        return {"message": f"User with ID {user_id} has been deleted successfully"}

    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"An unexpected error occurred: {str(e)}"
        )

