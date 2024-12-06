from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.config.database import Base
from sqlalchemy.types import DateTime


class Payslip(Base):
    __tablename__ = "payslips"

    PayslipID = Column(Integer, primary_key=True, index=True)
    EmployeeID = Column(Integer, ForeignKey("employees.EmployeeID", ondelete="CASCADE"), nullable=False)
    Month = Column(String(10), nullable=False)
    Year = Column(String(4), nullable=False)
    GeneratedBy = Column(Integer, ForeignKey("users.UserID"), nullable=False)
    CreatedAt = Column(DateTime, nullable=False)

    employee = relationship("Employee", back_populates="payslips")
    admin = relationship("User")
