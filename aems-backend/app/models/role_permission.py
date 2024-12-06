from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from app.config.database import Base


class RolePermission(Base):
    __tablename__ = "role_permissions"

    PermissionID = Column(Integer, primary_key=True, index=True)
    RoleID = Column(Integer, ForeignKey("roles.RoleID", ondelete="CASCADE"), nullable=False)
    PermissionName = Column(String(100), nullable=False)
    # True: được phép, False: bị hạn chế
    IsAllowed = Column(Boolean, nullable=False)

    # Quan hệ với Role
    role = relationship("Role", back_populates="permissions")
