from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.departments import Department
from app.schemas.departments import DepartmentOut
from app.config.database import SessionLocal

router = APIRouter()

# Dependency để lấy session database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API để lấy tất cả phòng ban
@router.get("/", response_model=list[DepartmentOut])
def get_all_departments(db: Session = Depends(get_db)):
    departments = db.query(Department).all()
    return departments
    
# API để lấy phòng ban theo ID
@router.get("/{department_id}", response_model=DepartmentOut)
def get_department(department_id: int, db: Session = Depends(get_db)):
    department = db.query(Department).filter(Department.DepartmentID == department_id).first()
    if not department:
        raise HTTPException(status_code=404, detail="Department not found")
    return department
