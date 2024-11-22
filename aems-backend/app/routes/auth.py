from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.auth import LoginRequest, LoginResponse
from app.utils.auth import authenticate_user, get_employee_info
from app.config.database import get_db

router = APIRouter()

@router.post("/login", response_model=LoginResponse)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    # Xác thực người dùng
    user = authenticate_user(db, request.username, request.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    # Lấy thông tin nhân viên
    employee_info = get_employee_info(db, user)
    if not employee_info:
        raise HTTPException(status_code=404, detail="Employee not found")

    return LoginResponse(**employee_info)
