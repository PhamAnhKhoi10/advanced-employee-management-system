from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime, timezone


# Schema cho việc tạo User
class UserCreate(BaseModel):
    Username: str = Field(..., min_length=3, max_length=50, description="Tên người dùng từ 3 đến 50 ký tự")
    Password: str = Field(..., min_length=8, max_length=128, description="Mật khẩu từ 8 đến 128 ký tự")
    RoleID: int = Field(..., description="ID của vai trò được gán cho người dùng")
    Email: Optional[EmailStr] = None  # Email là tùy chọn
    CreatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    UpdatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# Schema cho việc cập nhật User
class UserUpdate(BaseModel):
    Username: Optional[str] = Field(None, min_length=3, max_length=50)
    Password: Optional[str] = Field(None, min_length=8, max_length=128)
    RoleID: Optional[int] = None
    Email: Optional[EmailStr] = None
    UpdatedAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# Schema cho việc trả về User (đọc dữ liệu)
class UserOut(BaseModel):
    UserID: int
    Username: str
    RoleID: int
    Email: Optional[EmailStr]
    CreatedAt: datetime
    UpdatedAt: datetime

    class Config:
        orm_mode = True
