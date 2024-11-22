from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.users import User
from app.models.roles import Role
from app.schemas.roles import AssignRole
from app.config.database import SessionLocal

router = APIRouter()

# Dependency để lấy session database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API để gán vai trò cho người dùng
@router.post("/assign", response_model=dict)
def assign_role_to_user(assign_role: AssignRole, db: Session = Depends(get_db)):
    # Kiểm tra xem người dùng có tồn tại không
    user = db.query(User).filter(User.UserID == assign_role.UserID).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Kiểm tra xem vai trò có tồn tại không
    role = db.query(Role).filter(Role.RoleID == assign_role.RoleID).first()
    if not role:
        raise HTTPException(status_code=404, detail="Role not found")
    
    # Gán vai trò cho người dùng
    user.RoleID = assign_role.RoleID
    db.commit()

    return {"message": f"Role {role.RoleName} has been assigned to user {user.Username}."}

