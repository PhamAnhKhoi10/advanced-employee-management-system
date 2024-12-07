from pydantic import BaseModel, Field
from typing import Optional


# Schema cho việc tạo Salary
class SalaryCreate(BaseModel):
    EmployeeID: int
    BasicPay: float = Field(..., ge=0, description="Lương cơ bản không được nhỏ hơn 0")
    Bonuses: Optional[float] = Field(0.0, ge=0, description="Thưởng có thể trống hoặc >= 0")
    Deductions: Optional[float] = Field(0.0, ge=0, description="Các khoản khấu trừ có thể trống hoặc >= 0")
    NetPay: float = Field(..., ge=0, description="Lương thực nhận không được nhỏ hơn 0")
    Month: str
    Year: str


# Schema cho việc cập nhật Salary
class SalaryUpdate(BaseModel):
    BasicPay: Optional[float] = Field(None, ge=0)
    Bonuses: Optional[float] = Field(None, ge=0)
    Deductions: Optional[float] = Field(None, ge=0)
    NetPay: Optional[float] = Field(None, ge=0)
    Month: Optional[str] = None
    Year: Optional[str] = None


# Schema cho việc trả về Salary (đọc dữ liệu)
class SalaryOut(BaseModel):
    SalaryID: int
    EmployeeID: int
    BasicPay: float
    Bonuses: Optional[float]
    Deductions: Optional[float]
    NetPay: float
    Month: int
    Year: int

    class Config:
        orm_mode = True
        from_attributes = True

class EmployeeSalaryResponse(BaseModel):
    EmployeeName: str
    Salaries: list[SalaryOut]

