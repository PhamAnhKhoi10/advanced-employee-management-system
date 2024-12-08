from pydantic import BaseModel
from enum import Enum
from typing import Optional
from datetime import date

# Enum cho trạng thái
class LeaveRequestStatus(str, Enum):
    pending = "Pending"
    approved = "Approved"
    rejected = "Rejected"


class LeaveRequestCreate(BaseModel):
    EmployeeID: int
    StartDate: date
    EndDate: date
    Reason: Optional[str] = None
    Status: LeaveRequestStatus = LeaveRequestStatus.pending  # Default là Pending 
    HRManagerID: int

    class Config:
        orm_mode = True


class LeaveRequestUpdate(BaseModel):
    Status: Optional[LeaveRequestStatus] = None
    Reason: Optional[str] = None


class LeaveRequestOut(BaseModel):
    LeaveRequestID: int
    EmployeeID: int
    StartDate: date
    EndDate: date
    Reason: Optional[str]
    Status: LeaveRequestStatus
    HRManagerID: int

    class Config:
        orm_mode = True
        from_attributes = True

class EmployeeLeaveRequestResponse(BaseModel):
    EmployeeName: str
    LeaveRequests: list[LeaveRequestOut]

