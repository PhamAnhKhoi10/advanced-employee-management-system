from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.attendances import Attendance
from app.schemas.attendances import AttendanceCreate, AttendanceUpdate, AttendanceOut
from app.config.database import SessionLocal
from app.models.employees import Employee

router = APIRouter()

# Dependency để lấy session database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API để tạo attendance (điểm danh)
@router.post("/", response_model=AttendanceOut)
def create_attendance(attendance: AttendanceCreate, db: Session = Depends(get_db)):
    try:
        # Kiểm tra xem nhân viên có tồn tại không
        employee = db.query(Employee).filter(Employee.EmployeeID == attendance.EmployeeID).first()
        if not employee:
            raise HTTPException(status_code=404, detail="Employee not found")

        # Kiểm tra xem nhân viên đã điểm danh trong ngày chưa
        existing_attendance = db.query(Attendance).filter(
            Attendance.EmployeeID == attendance.EmployeeID,
            Attendance.Date == attendance.Date
        ).first()
        if existing_attendance:
            raise HTTPException(status_code=400, detail="Attendance for this employee on this date already exists")

        # Tạo attendance mới
        new_attendance = Attendance(
            EmployeeID=attendance.EmployeeID,
            Date=attendance.Date,
            Status=attendance.Status,
            Remarks=attendance.Remarks
        )
        db.add(new_attendance)
        db.commit()
        db.refresh(new_attendance)
        return new_attendance
    except HTTPException as http_exc:
        db.rollback()  # Rollback khi có lỗi HTTP
        raise http_exc
    except Exception as e:
        db.rollback()  # Rollback khi có lỗi không xác định
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")


# API để lấy thông tin attendance theo ID
@router.get("/{attendance_id}", response_model=AttendanceOut)
def get_attendance(attendance_id: int, db: Session = Depends(get_db)):
    attendance = db.query(Attendance).filter(Attendance.AttendanceID == attendance_id).first()
    if not attendance:
        raise HTTPException(status_code=404, detail="Attendance not found")
    return attendance

# API để lấy tất cả attendance của một nhân viên
@router.get("/employee/{employee_id}", response_model=list[AttendanceOut])
def get_employee_attendance(employee_id: int, db: Session = Depends(get_db)):
    employee = db.query(Employee).filter(Employee.EmployeeID == employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")   
    attendances = db.query(Attendance).filter(Attendance.EmployeeID == employee_id).all()
    return attendances

# API để cập nhật attendance
@router.put("/{attendance_id}", response_model=AttendanceOut)
def update_attendance(attendance_id: int, attendance: AttendanceUpdate, db: Session = Depends(get_db)):
    db_attendance = db.query(Attendance).filter(Attendance.AttendanceID == attendance_id).first()
    if not db_attendance:
        raise HTTPException(status_code=404, detail="Attendance not found")
    
    # Cập nhật các trường được cung cấp
    if attendance.Status:
        db_attendance.Status = attendance.Status
    if attendance.Remarks is not None:
        db_attendance.Remarks = attendance.Remarks

    db.commit()
    db.refresh(db_attendance)
    return db_attendance

# API để xóa attendance
@router.delete("/{attendance_id}", response_model=dict)
def delete_attendance(attendance_id: int, db: Session = Depends(get_db)):
    db_attendance = db.query(Attendance).filter(Attendance.AttendanceID == attendance_id).first()
    if not db_attendance:
        raise HTTPException(status_code=404, detail="Attendance not found")
    
    db.delete(db_attendance)
    db.commit()
    return {"message": f"Attendance with ID {attendance_id} has been deleted successfully"}

# API để trả về attendance của tất cả nhân viên
@router.get("/", response_model=list[AttendanceOut])
def get_all_attendances(db: Session = Depends(get_db)):
    attendances = db.query(Attendance).all()
    return attendances
