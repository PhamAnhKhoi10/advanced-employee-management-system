from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.performances import Performance
from app.schemas.performances import PerformanceCreate, PerformanceUpdate, PerformanceOut
from app.config.database import SessionLocal

router = APIRouter()

# Dependency để lấy session database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API để tạo performance mới
@router.post("/", response_model=PerformanceOut)
def create_performance(performance: PerformanceCreate, db: Session = Depends(get_db)):
    new_performance = Performance(
        EmployeeID=performance.EmployeeID,
        EvaluationDate=performance.EvaluationDate,
        TaskCompletion=performance.TaskCompletion,
        Feedback=performance.Feedback,
        Rating=performance.Rating
    )
    db.add(new_performance)
    db.commit()
    db.refresh(new_performance)
    return new_performance

# API để lấy thông tin performance theo ID
@router.get("/{performance_id}", response_model=PerformanceOut)
def get_performance(performance_id: int, db: Session = Depends(get_db)):
    performance = db.query(Performance).filter(Performance.PerformanceID == performance_id).first()
    if not performance:
        raise HTTPException(status_code=404, detail="Performance not found")
    return performance

# API để lấy tất cả performance của một nhân viên
@router.get("/employee/{employee_id}", response_model=list[PerformanceOut])
def get_employee_performances(employee_id: int, db: Session = Depends(get_db)):
    performances = db.query(Performance).filter(Performance.EmployeeID == employee_id).all()
    return performances

# API để cập nhật performance
@router.put("/{performance_id}", response_model=PerformanceOut)
def update_performance(performance_id: int, performance: PerformanceUpdate, db: Session = Depends(get_db)):
    db_performance = db.query(Performance).filter(Performance.PerformanceID == performance_id).first()
    if not db_performance:
        raise HTTPException(status_code=404, detail="Performance not found")
    
    if performance.TaskCompletion is not None:
        db_performance.TaskCompletion = performance.TaskCompletion
    if performance.Feedback:
        db_performance.Feedback = performance.Feedback
    if performance.Rating is not None:
        db_performance.Rating = performance.Rating

    db.commit()
    db.refresh(db_performance)
    return db_performance

# API để xóa performance
@router.delete("/{performance_id}", response_model=dict)
def delete_performance(performance_id: int, db: Session = Depends(get_db)):
    db_performance = db.query(Performance).filter(Performance.PerformanceID == performance_id).first()
    if not db_performance:
        raise HTTPException(status_code=404, detail="Performance not found")

    db.delete(db_performance)
    db.commit()
    return {"message": f"Performance with ID {performance_id} has been deleted successfully"}
