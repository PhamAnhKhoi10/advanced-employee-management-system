from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.notifications import Notification
from app.schemas.notifications import NotificationCreate, NotificationUpdate, NotificationOut
from app.config.database import SessionLocal

router = APIRouter()

# Dependency để lấy session database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API để tạo notification mới
@router.post("/", response_model=NotificationOut)
def create_notification(notification: NotificationCreate, db: Session = Depends(get_db)):
    new_notification = Notification(
        SenderID=notification.SenderID,
        RecipientID=notification.RecipientID,
        Title=notification.Title,
        Content=notification.Content,
        SentAt=notification.SentAt
    )
    db.add(new_notification)
    db.commit()
    db.refresh(new_notification)
    return new_notification

# API để lấy thông tin notification theo ID
@router.get("/{notification_id}", response_model=NotificationOut)
def get_notification(notification_id: int, db: Session = Depends(get_db)):
    notification = db.query(Notification).filter(Notification.NotificationID == notification_id).first()
    if not notification:
        raise HTTPException(status_code=404, detail="Notification not found")
    return notification

# API để lấy tất cả thông báo của một người nhận
@router.get("/recipient/{recipient_id}", response_model=list[NotificationOut])
def get_notifications_by_recipient(recipient_id: int, db: Session = Depends(get_db)):
    notifications = db.query(Notification).filter(Notification.RecipientID == recipient_id).all()
    return notifications

# API để cập nhật trạng thái đã đọc của notification
@router.put("/{notification_id}", response_model=NotificationOut)
def update_notification(notification_id: int, notification: NotificationUpdate, db: Session = Depends(get_db)):
    db_notification = db.query(Notification).filter(Notification.NotificationID == notification_id).first()
    if not db_notification:
        raise HTTPException(status_code=404, detail="Notification not found")

    if notification.IsRead is not None:
        db_notification.IsRead = notification.IsRead

    db.commit()
    db.refresh(db_notification)
    return db_notification

# API để xóa notification
@router.delete("/{notification_id}", response_model=dict)
def delete_notification(notification_id: int, db: Session = Depends(get_db)):
    db_notification = db.query(Notification).filter(Notification.NotificationID == notification_id).first()
    if not db_notification:
        raise HTTPException(status_code=404, detail="Notification not found")

    db.delete(db_notification)
    db.commit()
    return {"message": f"Notification with ID {notification_id} has been deleted successfully"}
