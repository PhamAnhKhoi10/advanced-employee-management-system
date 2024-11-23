from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.auth import LoginRequest, LoginResponse
from app.utils.auth import authenticate_user, create_access_token, get_employee_info
from app.config.database import get_db


router = APIRouter()

ACCESS_TOKEN_EXPIRE_MINUTES = 60


@router.post("/login", response_model=LoginResponse)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    """
    API đăng nhập: Xác thực người dùng và trả về JWT token kèm theo thông tin nhân viên.
    """
    # Xác thực thông tin người dùng
    user = authenticate_user(db, request.username, request.password)
    if not user:
        raise HTTPException(
            status_code=401, detail="Invalid username or password")

    # Lấy thông tin nhân viên dựa trên User
    employee_info = get_employee_info(db, user)
    if not employee_info:
        raise HTTPException(status_code=404, detail="Employee not found")

    # Tạo access token (JWT)
    access_token = create_access_token(
        data={"sub": user.Username, "role": employee_info["role"]},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    )

    # Trả về LoginResponse
    return LoginResponse(
        access_token=access_token,
        token_type="Bearer",
        **employee_info
    )
