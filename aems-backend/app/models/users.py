from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.config.database import Base


class User(Base):
    __tablename__ = "users"

    UserID = Column(Integer, primary_key=True, index=True, autoincrement=True)
    Username = Column(String(50), unique=True, nullable=False)
    Password = Column(String(128), nullable=False)
    RoleID = Column(Integer, ForeignKey(
        "roles.RoleID", ondelete="CASCADE"), nullable=False)
    Email = Column(String(100), unique=True, nullable=True)
    CreatedAt = Column(DateTime, nullable=False, default=lambda: datetime.now(timezone.utc))
    UpdatedAt = Column(DateTime, nullable=False, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
    

    # Quan hệ với Role
    role = relationship("Role", back_populates="users")
    employee = relationship("Employee", back_populates="user", uselist=False)
