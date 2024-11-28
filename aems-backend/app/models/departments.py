from datetime import datetime
from sqlalchemy import Column, DateTime, Integer, String
from sqlalchemy.orm import relationship
from app.config.database import Base

class Department(Base):
    __tablename__ = "departments"

    DepartmentID = Column(Integer, primary_key=True, index=True)
    DepartmentName = Column(String(100), nullable=False, unique=True)
    Description = Column(String(255), nullable=True)
    CreatedAt = Column(DateTime, default=datetime.utcnow)
    UpdatedAt = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Quan hệ với Employees (One-to-many)
    employees = relationship("Employee", back_populates="department")
