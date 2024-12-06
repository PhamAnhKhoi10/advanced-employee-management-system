from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.config.database import Base


class Salary(Base):
    __tablename__ = "salaries"

    SalaryID = Column(Integer, primary_key=True, index=True)
    EmployeeID = Column(Integer, ForeignKey("employees.EmployeeID", ondelete="CASCADE"), nullable=False)
    BasicPay = Column(Float, nullable=False)
    Bonuses = Column(Float, nullable=True)
    Deductions = Column(Float, nullable=True)
    NetPay = Column(Float, nullable=False)
    Month = Column(Integer, nullable=False)
    Year = Column(Integer, nullable=False)

    # Quan hệ với Employee
    employee = relationship("Employee", back_populates="salaries")
