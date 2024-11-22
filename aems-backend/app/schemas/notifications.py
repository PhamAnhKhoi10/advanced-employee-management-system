from pydantic import BaseModel
from typing import Optional
from datetime import datetime


# Schema cho việc tạo Notification
class NotificationCreate(BaseModel):
    SenderID: int
    RecipientID: int
    Title: str
    Content: str
    SentAt: datetime = datetime.now()


# Schema cho việc cập nhật Notification
class NotificationUpdate(BaseModel):
    IsRead: Optional[bool] = None  # Cập nhật trạng thái đã đọc


# Schema cho việc trả về Notification (đọc dữ liệu)
class NotificationOut(BaseModel):
    NotificationID: int
    SenderID: int
    RecipientID: int
    Title: str
    Content: str
    IsRead: bool
    SentAt: datetime

    class Config:
        orm_mode = True
