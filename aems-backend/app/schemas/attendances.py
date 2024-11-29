from pydantic import BaseModel
from typing import Optional
from datetime import date


# Schema cho việc tạo Attendance
class AttendanceCreate(BaseModel):
    EmployeeID: int
    Date: date
    Status: str
    HoursWorked: Optional[int] = None  # Giá trị mặc định là None


# Schema cho việc cập nhật Attendance
class AttendanceUpdate(BaseModel):
    Status: Optional[str] = None
    HoursWorked: Optional[int] = None


# Schema cho việc trả về Attendance (đọc dữ liệu)
class AttendanceOut(BaseModel):
    AttendanceID: int
    EmployeeID: int
    Date: date
    Status: str
    HoursWorked: Optional[int]

    class Config:
        orm_mode = True
