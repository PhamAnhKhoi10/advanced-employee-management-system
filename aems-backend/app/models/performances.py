from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.config.database import Base


class Performance(Base):
    __tablename__ = "performances"

    PerformanceID = Column(Integer, primary_key=True, index=True)
    EmployeeID = Column(Integer, ForeignKey("employees.EmployeeID", ondelete="CASCADE"), nullable=False)
    EvaluationDate = Column(String(50), nullable=False)
    TaskCompletion = Column(Float, nullable=False)  # % hoàn thành
    Feedback = Column(String(500), nullable=True)
    Rating = Column(Float, nullable=True)  # Điểm đánh giá (0-10)

    employee = relationship("Employee", back_populates="performances")
