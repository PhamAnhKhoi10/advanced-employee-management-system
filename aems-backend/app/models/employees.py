from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.config.database import Base


class Employee(Base):
    __tablename__ = "employees"

    EmployeeID = Column(Integer, primary_key=True, index=True, autoincrement=True)
    UserID = Column(Integer, ForeignKey(
        "users.UserID", ondelete="CASCADE"), nullable=False)
    Name = Column(String(100), nullable=False)
    DepartmentID = Column(Integer, ForeignKey('departments.DepartmentID'))
    Position = Column(String(100), nullable=False)
    DateOfJoining = Column(String(100), nullable=False)
    PhoneNumber = Column(String(20), nullable=True)
    Address = Column(String(255), nullable=True)

    # Quan hệ với User
    user = relationship("User", back_populates="employee")
    department = relationship("Department", back_populates="employees")

    # Quan hệ với Attendance
    attendances = relationship("Attendance", back_populates="employee", cascade="all, delete-orphan")
    leave_requests = relationship("LeaveRequest", back_populates="employee", cascade="all, delete-orphan")
    payslips = relationship("Payslip", back_populates="employee", cascade="all, delete-orphan")
    performances = relationship("Performance", back_populates="employee", cascade="all, delete-orphan")
    salaries = relationship("Salary", back_populates="employee", cascade="all, delete-orphan")

