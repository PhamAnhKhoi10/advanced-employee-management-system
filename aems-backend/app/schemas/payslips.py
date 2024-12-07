from pydantic import BaseModel
from typing import Optional
from datetime import date


# Schema cho việc tạo Payslip
class PayslipCreate(BaseModel):
    EmployeeID: int
    Month: int
    Year: int
    GeneratedBy: int
    CreatedAt: date


# Schema cho việc cập nhật Payslip
class PayslipUpdate(BaseModel):
    CreatedAt: Optional[date] = None  # Cho phép cập nhật ngày tạo phiếu lương


# Schema cho việc trả về Payslip (đọc dữ liệu)
class PayslipOut(BaseModel):
    PayslipID: int
    EmployeeID: int
    Month: int
    Year: int
    GeneratedBy: int
    CreatedAt: date

    class Config:
        orm_mode = True
        from_attributes = True

class PayslipOutResponse(BaseModel):
    Name: str
    Payslips: list[PayslipOut]

