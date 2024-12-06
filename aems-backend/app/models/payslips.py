from sqlalchemy import Column, Integer, ForeignKey, Date
from sqlalchemy.orm import relationship
from app.config.database import Base


class Payslip(Base):
    __tablename__ = "payslips"

    PayslipID = Column(Integer, primary_key=True, index=True)
    EmployeeID = Column(Integer, ForeignKey("employees.EmployeeID", ondelete="CASCADE"), nullable=False)
    Month = Column(Integer, nullable=False)
    Year = Column(Integer, nullable=False)
    GeneratedBy = Column(Integer, ForeignKey("users.UserID"), nullable=False)
    CreatedAt = Column(Date, nullable=False)

    employee = relationship("Employee", back_populates="payslips")
    admin = relationship("User")
