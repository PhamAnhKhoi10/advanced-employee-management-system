from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship
from app.config.database import Base


class Role(Base):
    __tablename__ = "roles"

    RoleID = Column(Integer, primary_key=True, index=True)
    RoleName = Column(String(50), unique=True, nullable=False)
    Description = Column(Text, nullable=True)

    # Quan hệ với RolePermission và User
    users = relationship("User", back_populates="role")

