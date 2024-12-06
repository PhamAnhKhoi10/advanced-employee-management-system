from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from app.config.database import Base

class Department(Base):
    __tablename__ = "departments"

    DepartmentID = Column(Integer, primary_key=True, index=True)
    DepartmentName = Column(String(100), nullable=False, unique=True)
    Description = Column(String(255), nullable=True)
    CreatedAt = Column(DateTime, default=datetime.now(timezone.utc))
    UpdatedAt = Column(DateTime, default=datetime.now(timezone.utc), onupdate=datetime.now(timezone.utc))
    
    # Quan hệ với Employees (One-to-many)
    employees = relationship("Employee", back_populates="department")
