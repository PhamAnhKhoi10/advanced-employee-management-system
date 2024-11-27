from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.config.database import Base


class User(Base):
    __tablename__ = "users"

    UserID = Column(Integer, primary_key=True, index=True)
    Username = Column(String(50), unique=True, nullable=False)
    Password = Column(String(128), nullable=False)
    RoleID = Column(Integer, ForeignKey(
        "roles.RoleID", ondelete="CASCADE"), nullable=False)
    Email = Column(String(100), unique=True, nullable=True)
    CreatedAt = Column(String(100), nullable=False)
    UpdatedAt = Column(String(100), nullable=False)

    # Quan hệ với Role
    role = relationship("Role", back_populates="users")
    employee = relationship("Employee", back_populates="user", uselist=False)
