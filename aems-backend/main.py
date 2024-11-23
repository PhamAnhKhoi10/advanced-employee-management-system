from fastapi import FastAPI
from app.routes import auth
from app.routes import attendance
from app.routes import employees
from app.routes import departments
from app.routes import leave_requests
from app.routes import notifications
from app.routes import payslips
from app.routes import performances
from app.routes import roles
from app.routes import salaries
from app.routes import users

app = FastAPI(title="Attendance Management API",
    description="API for managing employee attendances",
    version="1.0.0")    

# Đăng ký router cho API auth
app.include_router(auth.router, prefix="/api/v1", tags=["Authentication"])
app.include_router(attendance.router, prefix="/api/v1", tags=["Attendances"])
app.include_router(employees.router, prefix="/api/v1", tags=["Employees"])
app.include_router(departments.router, prefix="/api/v1", tags=["Departments"])
app.include_router(leave_requests.router, prefix="/api/v1", tags=["Leave Requests"])
app.include_router(notifications.router, prefix="/api/v1", tags=["Notifications"])

app.include_router(payslips.router, prefix="/api/v1", tags=["Payslips"])
app.include_router(performances.router, prefix="/api/v1", tags=["Performances"])
app.include_router(roles.router, prefix="/api/v1", tags=["Roles"])
app.include_router(salaries.router, prefix="/api/v1", tags=["Salaries"])
app.include_router(users.router, prefix="/api/v1", tags=["Users"])
