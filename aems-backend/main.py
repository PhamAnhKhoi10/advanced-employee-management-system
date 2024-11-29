from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import (
    auth, attendance, employees, departments,
    leave_requests, notifications, payslips,
    performances, roles, salaries, users
)

app = FastAPI(
    title="Attendance Management API",
    description="API for managing employee attendances",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes with specific paths
app.include_router(auth.router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])
app.include_router(roles.router, prefix="/api/v1/roles", tags=["Roles"])
app.include_router(employees.router, prefix="/api/v1/employees", tags=["Employees"])
app.include_router(departments.router, prefix="/api/v1/departments", tags=["Departments"])
app.include_router(attendance.router, prefix="/api/v1/attendance", tags=["Attendances"])
app.include_router(leave_requests.router, prefix="/api/v1/leave-requests", tags=["Leave Requests"])
app.include_router(notifications.router, prefix="/api/v1/notifications", tags=["Notifications"])
app.include_router(payslips.router, prefix="/api/v1/payslips", tags=["Payslips"])
app.include_router(performances.router, prefix="/api/v1/performances", tags=["Performances"])
app.include_router(salaries.router, prefix="/api/v1/salaries", tags=["Salaries"])

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to Attendance Management API"}