from pydantic import BaseModel
from typing import Optional
from datetime import date


# Schema cho việc tạo Attendance
class AttendanceCreate(BaseModel):
    EmployeeID: int
    Date: date
    Status: str
    Remarks: str


# Schema cho việc cập nhật Attendance
class AttendanceUpdate(BaseModel):
    Status: Optional[str]
    Remarks: Optional[str]


# Schema cho việc trả về Attendance (đọc dữ Liệu)
class AttendanceOut(BaseModel):
    AttendanceID: int
    EmployeeID: int
    Date: date
    Status: str
    Remarks: Optional[str]

    class Config:
        orm_mode = True
