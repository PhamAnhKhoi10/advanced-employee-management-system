from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date


# Schema cho việc tạo Employee
class EmployeeCreate(BaseModel):
    UserID: int
    Name: str
    Department: str
    Position: str
    DateOfJoining: date
    PhoneNumber: Optional[str] = None  # Giá trị mặc định là None
    Address: Optional[str] = None


# Schema cho việc cập nhật Employee
class EmployeeUpdate(BaseModel):
    Name: Optional[str] = None
    Department: Optional[str] = None
    Position: Optional[str] = None
    DateOfJoining: Optional[date] = None
    PhoneNumber: Optional[str] = None
    Address: Optional[str] = None


# Schema cho việc trả về Employee (đọc dữ liệu)
class EmployeeOut(BaseModel):
    EmployeeID: int
    UserID: int
    Name: str
    Department: str
    Position: str
    DateOfJoining: date
    PhoneNumber: Optional[str]
    Address: Optional[str]

    class Config:
        orm_mode = True
