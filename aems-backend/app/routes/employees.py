from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.employees import Employee
from app.schemas.employees import EmployeeCreate, EmployeeUpdate, EmployeeOut
from app.config.database import SessionLocal
from app.models.users import User

router = APIRouter()

# Dependency để lấy session database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API để tạo nhân viên
@router.post("/", response_model=EmployeeOut)
def create_employee(employee: EmployeeCreate, db: Session = Depends(get_db)):
    # Kiểm tra xem UserID có tồn tại không
    user = db.query(User).filter(User.UserID == employee.UserID).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Kiểm tra nếu UserID là role admin
    if user.RoleID == 1:  # Giả sử RoleID = 1 là admin
        raise HTTPException(status_code=400, detail="Cannot create Employee for an Admin user")

    # Kiểm tra Employee đã tồn tại chưa
    if db.query(Employee).filter(Employee.UserID == employee.UserID).first():
        raise HTTPException(status_code=400, detail="Employee already exists")

    new_employee = Employee(
        UserID=employee.UserID,  # Thêm UserID từ bảng User
        Name=employee.Name,
        DepartmentID=employee.DepartmentID,
        Position=employee.Position,
        DateOfJoining=employee.DateOfJoining,
        PhoneNumber=employee.PhoneNumber,
        Address=employee.Address
    )
    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)
    return new_employee

# API để lấy thông tin nhân viên theo ID
@router.get("/{employee_id}", response_model=EmployeeOut)
def get_employee(employee_id: int, db: Session = Depends(get_db)):
    employee = db.query(Employee).filter(Employee.EmployeeID == employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employee

# API để lấy tất cả nhân viên
@router.get("/", response_model=list[EmployeeOut])
def get_all_employees(db: Session = Depends(get_db)):
    employees = db.query(Employee).all()
    return employees

# API để cập nhật thông tin nhân viên
@router.put("/{employee_id}", response_model=EmployeeOut)
def update_employee(employee_id: int, employee: EmployeeUpdate, db: Session = Depends(get_db)):
    db_employee = db.query(Employee).filter(Employee.EmployeeID == employee_id).first()
    if not db_employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    
    # Cập nhật các trường được cung cấp
    if employee.Name:
        db_employee.Name = employee.Name
    if employee.Position:
        db_employee.Position = employee.Position
    if employee.DepartmentID:
        db_employee.DepartmentID = employee.DepartmentID
    if employee.PhoneNumber:
        db_employee.PhoneNumber = employee.PhoneNumber
    if employee.Address:
        db_employee.Address = employee.Address

    db.commit()
    db.refresh(db_employee)
    return db_employee

# API để xóa nhân viên
@router.delete("/{employee_id}", response_model=dict)
def delete_employee(employee_id: int, db: Session = Depends(get_db)):
    db_employee = db.query(Employee).filter(Employee.EmployeeID == employee_id).first()
    if not db_employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    
    db.delete(db_employee)
    db.commit()
    return {"message": f"Employee with ID {employee_id} has been deleted successfully"}
