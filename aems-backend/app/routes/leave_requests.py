from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.leave_requests import LeaveRequest
from app.schemas.leave_requests import LeaveRequestCreate, LeaveRequestUpdate, LeaveRequestOut, EmployeeLeaveRequestResponse
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

# API để tạo yêu cầu nghỉ phép
@router.post("/", response_model=LeaveRequestOut)
def create_leave_request(leave_request: LeaveRequestCreate, db: Session = Depends(get_db)):
    new_leave_request = LeaveRequest(
        EmployeeID=leave_request.EmployeeID,
        StartDate=leave_request.StartDate,
        EndDate=leave_request.EndDate,
        Reason=leave_request.Reason,
        Status=leave_request.Status,
        HRManagerID=leave_request.HRManagerID
    )
    db.add(new_leave_request)
    db.commit()
    db.refresh(new_leave_request)
    return new_leave_request

# API để cập nhật trạng thái yêu cầu nghỉ phép
@router.put("/{leave_request_id}", response_model=LeaveRequestOut)
def update_leave_request(leave_request_id: int, leave_request: LeaveRequestUpdate, db: Session = Depends(get_db)):
    db_leave_request = db.query(LeaveRequest).filter(LeaveRequest.LeaveRequestID == leave_request_id).first()
    if not db_leave_request:
        raise HTTPException(status_code=404, detail="Leave request not found")

    if leave_request.Status:
        db_leave_request.Status = leave_request.Status
    if leave_request.Reason:
        db_leave_request.Reason = leave_request.Reason

    db.commit()
    db.refresh(db_leave_request)
    return db_leave_request

# API để lấy yêu cầu nghỉ phép theo ID
@router.get("/{leave_request_id}", response_model=LeaveRequestOut)
def get_leave_request(leave_request_id: int, db: Session = Depends(get_db)):
    leave_request = db.query(LeaveRequest).filter(LeaveRequest.LeaveRequestID == leave_request_id).first()
    if not leave_request:
        raise HTTPException(status_code=404, detail="Leave request not found")
    return leave_request

# API để lấy tất cả yêu cầu nghỉ phép của một nhân viên
@router.get("/employee/{employee_id}", response_model=EmployeeLeaveRequestResponse)
def get_employee_leave_requests(employee_id: int, db: Session = Depends(get_db)):
    employee = db.query(Employee).filter(Employee.EmployeeID == employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    leave_requests = db.query(LeaveRequest).filter(LeaveRequest.EmployeeID == employee_id).all()
    leave_requests_out = [LeaveRequestOut.from_orm(leave_request) for leave_request in leave_requests]
    return EmployeeLeaveRequestResponse(EmployeeName=employee.Name, LeaveRequests=leave_requests_out)
