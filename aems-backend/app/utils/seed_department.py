from sqlalchemy.orm import Session
from app.models.departments import Department

def seed_departments(db: Session):
    departments = [
        "IT", "Human Resources", "Marketing", "Finance", 
        "Sales", "Legal", "Customer Support", 
        "Operations", "Research and Development", "Product Management"
    ]
    
    for department_name in departments:
        if not db.query(Department).filter(Department.DepartmentName == department_name).first():
            new_department = Department(DepartmentName=department_name)
            db.add(new_department)
    
    db.commit()
    print("Departments seeded successfully.")
