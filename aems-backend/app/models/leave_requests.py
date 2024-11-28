from sqlalchemy import Column, Integer, String, ForeignKey, Enum
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
    StartDate = Column(String(50), nullable=False)
    EndDate = Column(String(50), nullable=False)
    Reason = Column(String(255), nullable=True)
    Status = Column(Enum(LeaveRequestStatus), nullable=False,
                    default=LeaveRequestStatus.pending)  # Enum cho trạng thái
    HRManagerID = Column(Integer, ForeignKey("users.UserID", ondelete="CASCADE"), nullable=False)

    # Quan hệ với Employee
    employee = relationship("Employee", back_populates="leave_requests")
