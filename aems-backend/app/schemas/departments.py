from pydantic import BaseModel
from typing import Optional
from datetime import datetime


# Schema cho việc tạo Department (dù phòng ban cố định, chỉ dùng để hiển thị)
class DepartmentCreate(BaseModel):
    DepartmentName: str
    Description: Optional[str] = None


# Schema cho việc trả về Department
class DepartmentOut(BaseModel):
    DepartmentID: int
    DepartmentName: str
    Description: Optional[str]
    CreatedAt: datetime
    UpdatedAt: datetime

    class Config:
        orm_mode = True

