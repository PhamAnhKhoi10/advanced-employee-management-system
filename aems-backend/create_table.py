from app.config.database import Base, engine
from app.models.attendances import Attendance
from app.models.employees import Employee
from app.models.leave_requests import LeaveRequest
from app.models.notifications import Notification
from app.models.payslips import Payslip
from app.models.performances import Performance
from app.models.roles import Role
from app.models.salaries import Salary
from app.models.users import User
from app.models.departments import Department

# Tạo tất cả bảng trong cơ sở dữ liệu
print("Creating tables in the database...")
Base.metadata.create_all(bind=engine)
print("Tables created successfully!")
