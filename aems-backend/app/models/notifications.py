from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, Date
from sqlalchemy.orm import relationship
from app.config.database import Base


class Notification(Base):
    __tablename__ = "notifications"

    NotificationID = Column(Integer, primary_key=True, index=True)
    SenderID = Column(Integer, ForeignKey("users.UserID"), nullable=False)
    RecipientID = Column(Integer, ForeignKey("users.UserID"), nullable=False)
    Title = Column(String(100), nullable=False)
    Content = Column(String(500), nullable=False)
    IsRead = Column(Boolean, default=False)
    SentAt = Column(Date, nullable=False)

    sender = relationship("User", foreign_keys=[SenderID])
    recipient = relationship("User", foreign_keys=[RecipientID])
