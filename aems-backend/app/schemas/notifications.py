from pydantic import BaseModel
from typing import Optional
from datetime import date


# Schema cho việc tạo Notification
class NotificationCreate(BaseModel):
    SenderID: int
    RecipientID: int
    Title: str
    Content: str
    SentAt: date


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
    SentAt: date

    class Config:
        orm_mode = True
        from_attributes = True

class NotificationWithNamesOut(BaseModel):
    NotificationID: int
    SenderID: int
    SenderName: str
    RecipientID: int
    RecipientName: str
    Title: str
    Content: str
    IsRead: bool
    SentAt: date

    class Config:
        orm_mode = True
        from_attributes = True

