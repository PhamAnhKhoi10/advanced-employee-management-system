from sqlalchemy import Column, Integer, String, ForeignKey, Enum, Date
from sqlalchemy.orm import relationship
from sqlalchemy import Enum
from app.config.database import Base
from enum import Enum as PyEnum

# Định nghĩa Enum cho trạng thái
class LeaveRequestStatus(PyEnum):
    pending = "Pending"
    approved = "Approved"
    rejected = "Rejected"


class LeaveRequest(Base):
    __tablename__ = "leave_requests"

    LeaveRequestID = Column(Integer, primary_key=True, index=True)
    EmployeeID = Column(Integer, ForeignKey(
        "employees.EmployeeID", ondelete="CASCADE"), nullable=False)
    HRManagerID = Column(Integer, ForeignKey(
        "employees.EmployeeID", ondelete="CASCADE"), nullable=False) 
    StartDate = Column(Date, nullable=False)
    EndDate = Column(Date, nullable=False)
    Reason = Column(String(255), nullable=True)
    Status = Column(Enum(LeaveRequestStatus), nullable=False, default=LeaveRequestStatus.pending)

    # Quan hệ với Employee (nhân viên gửi yêu cầu)
    employee = relationship("Employee", back_populates="leave_requests", foreign_keys=[EmployeeID])

    # Quan hệ với Employee (HR Manager duyệt yêu cầu)
    hr_manager = relationship("Employee", back_populates="approved_leave_requests", foreign_keys=[HRManagerID])
