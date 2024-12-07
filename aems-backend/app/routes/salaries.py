from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.salaries import Salary
from app.schemas.salaries import SalaryCreate, SalaryUpdate, SalaryOut, EmployeeSalaryResponse
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

# API để tạo salary mới
@router.post("/", response_model=SalaryOut)
def create_salary(salary: SalaryCreate, db: Session = Depends(get_db)):
    # Kiểm tra xem nhân viên có tồn tại không
    existing_salary = db.query(Salary).filter(Salary.EmployeeID == salary.EmployeeID, Salary.Month == salary.Month, Salary.Year == salary.Year).first()
    if existing_salary:
        raise HTTPException(status_code=400, detail="Salary for this employee in this month and year already exists")

    new_salary = Salary(
        EmployeeID=salary.EmployeeID,
        BasicPay=salary.BasicPay,
        Bonuses=salary.Bonuses,
        Deductions=salary.Deductions,
        NetPay=salary.NetPay,
        Month=salary.Month,
        Year=salary.Year
    )
    db.add(new_salary)
    db.commit()
    db.refresh(new_salary)
    return new_salary

# API để lấy thông tin salary theo ID
@router.get("/{salary_id}", response_model=SalaryOut)
def get_salary(salary_id: int, db: Session = Depends(get_db)):
    salary = db.query(Salary).filter(Salary.SalaryID == salary_id).first()
    if not salary:
        raise HTTPException(status_code=404, detail="Salary not found")
    return salary

# API để lấy tất cả salary của một nhân viên
@router.get("/employee/{employee_id}", response_model=EmployeeSalaryResponse)
def get_employee_salaries(employee_id: int, db: Session = Depends(get_db)):
    employee = db.query(Employee).filter(Employee.EmployeeID == employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    salaries = db.query(Salary).filter(Salary.EmployeeID == employee_id).all()
    salaries_out = [SalaryOut.from_orm(salary) for salary in salaries]
    return EmployeeSalaryResponse(EmployeeName=employee.Name, Salaries=salaries_out)

# API để cập nhật salary
@router.put("/{salary_id}", response_model=SalaryOut)
def update_salary(salary_id: int, salary: SalaryUpdate, db: Session = Depends(get_db)):
    db_salary = db.query(Salary).filter(Salary.SalaryID == salary_id).first()
    if not db_salary:
        raise HTTPException(status_code=404, detail="Salary not found")

    if salary.BasicPay is not None:
        db_salary.BasicPay = salary.BasicPay
    if salary.Bonuses is not None:
        db_salary.Bonuses = salary.Bonuses
    if salary.Deductions is not None:
        db_salary.Deductions = salary.Deductions
    if salary.NetPay is not None:
        db_salary.NetPay = salary.NetPay
    if salary.Month:
        db_salary.Month = salary.Month
    if salary.Year:
        db_salary.Year = salary.Year

    db.commit()
    db.refresh(db_salary)
    return db_salary

# API để xóa salary
@router.delete("/{salary_id}", response_model=dict)
def delete_salary(salary_id: int, db: Session = Depends(get_db)):
    db_salary = db.query(Salary).filter(Salary.SalaryID == salary_id).first()
    if not db_salary:
        raise HTTPException(status_code=404, detail="Salary not found")

    db.delete(db_salary)
    db.commit()
    return {"message": f"Salary with ID {salary_id} has been deleted successfully"}
