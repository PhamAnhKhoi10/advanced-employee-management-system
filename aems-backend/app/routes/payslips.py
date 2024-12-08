from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.payslips import Payslip
from app.schemas.payslips import PayslipCreate, PayslipUpdate, PayslipOut, PayslipOutResponse
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

# API để tạo payslip mới
@router.post("/", response_model=PayslipOut)
def create_payslip(payslip: PayslipCreate, db: Session = Depends(get_db)):
    new_payslip = Payslip(
        EmployeeID=payslip.EmployeeID,
        Month=payslip.Month,
        Year=payslip.Year,
        GeneratedBy=payslip.GeneratedBy,
        CreatedAt=payslip.CreatedAt
    )
    db.add(new_payslip)
    db.commit()
    db.refresh(new_payslip)
    return new_payslip

# API để lấy thông tin payslip theo ID
@router.get("/{payslip_id}", response_model=PayslipOut)
def get_payslip(payslip_id: int, db: Session = Depends(get_db)):
    payslip = db.query(Payslip).filter(Payslip.PayslipID == payslip_id).first()
    if not payslip:
        raise HTTPException(status_code=404, detail="Payslip not found")
    return payslip

# API để lấy tất cả payslips của một nhân viên
@router.get("/employee/{employee_id}", response_model=PayslipOutResponse)
def get_employee_payslips(employee_id: int, db: Session = Depends(get_db)):
    employee = db.query(Employee).filter(Employee.EmployeeID == employee_id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    payslips = db.query(Payslip).filter(Payslip.EmployeeID == employee_id).all()
    if not payslips:
        raise HTTPException(status_code=404, detail="Employee not found")
    payslips_out = [PayslipOut.from_orm(p) for p in payslips]
    return PayslipOutResponse(Name=employee.Name, Payslips=payslips_out)

# API để cập nhật payslip
@router.put("/{payslip_id}", response_model=PayslipOut)
def update_payslip(payslip_id: int, payslip: PayslipUpdate, db: Session = Depends(get_db)):
    db_payslip = db.query(Payslip).filter(Payslip.PayslipID == payslip_id).first()
    if not db_payslip:
        raise HTTPException(status_code=404, detail="Payslip not found")

    try:
        # Cập nhật các trường có trong payload
        if payslip.CreatedAt:
            db_payslip.CreatedAt = payslip.CreatedAt

        # Thực hiện commit thay đổi
        db.commit()
        db.refresh(db_payslip)

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

    return db_payslip

