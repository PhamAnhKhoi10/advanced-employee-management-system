from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.users import User
from app.models.roles import Role
from app.schemas.users import UserCreate, UserUpdate, UserOut
from app.config.database import SessionLocal

router = APIRouter()

# Dependency để lấy session database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API để tạo user mới
@router.post("/", response_model=UserOut)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # Kiểm tra xem vai trò có tồn tại không
    role = db.query(Role).filter(Role.RoleID == user.RoleID).first()
    if not role:
        raise HTTPException(status_code=404, detail="Role not found")

    new_user = User(
        Username=user.Username,
        Password=user.Password,
        RoleID=user.RoleID,
        Email=user.Email,
        CreatedAt=user.CreatedAt,
        UpdatedAt=user.UpdatedAt
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

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

    if user.Username:
        db_user.Username = user.Username
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
    db_user = db.query(User).filter(User.UserID == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(db_user)
    db.commit()
    return {"message": f"User with ID {user_id} has been deleted successfully"}
