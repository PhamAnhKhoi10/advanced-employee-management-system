from pydantic import BaseModel, Field
from typing import Optional
from datetime import date


# Schema cho việc tạo Performance
class PerformanceCreate(BaseModel):
    EmployeeID: int
    EvaluationDate: date
    TaskCompletion: float = Field(..., ge=0, le=100, description="Percentage of task completion (0-100)")
    Feedback: Optional[str] = None
    Rating: Optional[float] = Field(None, ge=0, le=10, description="Rating score (0-10)")


# Schema cho việc cập nhật Performance
class PerformanceUpdate(BaseModel):
    TaskCompletion: Optional[float] = Field(None, ge=0, le=100, description="Percentage of task completion (0-100)")
    Feedback: Optional[str] = None
    Rating: Optional[float] = Field(None, ge=0, le=10, description="Rating score (0-10)")


# Schema cho việc trả về Performance (đọc dữ liệu)
class PerformanceOut(BaseModel):
    PerformanceID: int
    EmployeeID: int
    EvaluationDate: date
    TaskCompletion: float
    Feedback: Optional[str]
    Rating: Optional[float]

    class Config:
        orm_mode = True
        from_attributes = True

class EmployeePerformanceResponse(BaseModel):
    EmployeeName: str
    Performances: list[PerformanceOut]

