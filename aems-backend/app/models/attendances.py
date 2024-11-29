from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.config.database import Base


class Attendance(Base):
    __tablename__ = "attendances"

    AttendanceID = Column(Integer, primary_key=True, index=True)
    EmployeeID = Column(Integer, ForeignKey("employees.EmployeeID", ondelete="CASCADE"), nullable=False)
    Date = Column(String(50), nullable=False)
    Status = Column(String(20), nullable=False)
    HoursWorked = Column(Integer, nullable=True)

    # Quan hệ với Employee
    employee = relationship("Employee", back_populates="attendances")
