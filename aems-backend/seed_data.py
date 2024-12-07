from datetime import datetime, timezone
from app.config.database import engine
from datetime import date
from sqlalchemy.orm import Session
from app.models.roles import Role
from app.models.users import User 
from app.models.employees import Employee
from app.models.departments import Department
from app.models.attendances import Attendance
from app.models.leave_requests import LeaveRequest
from app.models.payslips import Payslip
from app.models.performances import Performance
from app.models.notifications import Notification
from app.models.salaries import Salary
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    return pwd_context.hash(password)

hashed_admin_password = hash_password("admin_password")
hashed_password1 = hash_password("hr1_password")
hashed_password2 = hash_password("hr2_password")
hashed_password3 = hash_password("hr3_password")
hashed_password4 = hash_password("em1_password")
hashed_password5 = hash_password("em2_password")
hashed_password6 = hash_password("em3_password")
hashed_password7 = hash_password("em4_password")
hashed_password8 = hash_password("em5_password")
hashed_password9 = hash_password("em6_password")
hashed_password10 = hash_password("em7_password")

def seed_data():
    # Tạo session
    session = Session(bind=engine)
    current_time = datetime.now(timezone.utc)

    # 1. Tạo Roles
    roles = [
        Role(RoleID=1, RoleName="Admin", Description="System Administrator"),
        Role(RoleID=2, RoleName="HR", Description="Human Resources Manager"),
        Role(RoleID=3, RoleName="Employee", Description="Regular Employee"),
    ]
    session.add_all(roles)
    session.commit()

    # 2. Tạo Users
    users = [
        User(UserID=1, Username="admin", Password=hashed_admin_password, RoleID=1, Email="admin@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=2, Username="hr1", Password=hashed_password1, RoleID=2, Email="hr1@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=3, Username="hr2", Password=hashed_password2, RoleID=2, Email="hr2@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=4, Username="hr3", Password=hashed_password3, RoleID=2, Email="hr3@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=5, Username="emp1", Password=hashed_password4, RoleID=3, Email="emp1@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=6, Username="emp2", Password=hashed_password5, RoleID=3, Email="emp2@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=7, Username="emp3", Password=hashed_password6, RoleID=3, Email="emp3@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=8, Username="emp4", Password=hashed_password7, RoleID=3, Email="emp4@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=9, Username="emp5", Password=hashed_password8, RoleID=3, Email="emp5@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=10, Username="emp6", Password=hashed_password9, RoleID=3, Email="emp6@example.com", CreatedAt=current_time, UpdatedAt=current_time),
        User(UserID=11, Username="emp7", Password=hashed_password10, RoleID=3, Email="emp7@example.com", CreatedAt=current_time, UpdatedAt=current_time),
    ]
    session.add_all(users)
    session.commit()

    # 3. Tạo Departments
    departments = [
        Department(DepartmentID=1, DepartmentName="Human Resources"),
        Department(DepartmentID=2, DepartmentName="Engineering"),
        Department(DepartmentID=3, DepartmentName="Sales"),
    ]
    session.add_all(departments)
    session.commit()

    # 4. Tạo Employees
    employees = [
        Employee(EmployeeID=1, UserID=1, Name="admin", DepartmentID=1, Position="admin", DateOfJoining=date(2020, 1, 15), PhoneNumber="1234567899", Address="12331 HR Street"),
        Employee(EmployeeID=2, UserID=2, Name="HR Manager 1", DepartmentID=1, Position="HR Manager", DateOfJoining=date(2020, 1, 15), PhoneNumber="1234567890", Address="123 HR Street"),
        Employee(EmployeeID=3, UserID=3, Name="HR Manager 2", DepartmentID=1, Position="HR Manager", DateOfJoining=date(2021, 3, 1), PhoneNumber="1234567891", Address="124 HR Street"),
        Employee(EmployeeID=4, UserID=4, Name="HR Manager 3", DepartmentID=1, Position="HR Manager", DateOfJoining=date(2022, 6, 10), PhoneNumber="1234567892", Address="125 HR Street"),
        Employee(EmployeeID=5, UserID=5, Name="Employee 1", DepartmentID=2, Position="Engineer", DateOfJoining=date(2019, 7, 20), PhoneNumber="1234567801", Address="201 Engineer Ave"),
        Employee(EmployeeID=6, UserID=6, Name="Employee 2", DepartmentID=2, Position="Engineer", DateOfJoining=date(2020, 10, 15), PhoneNumber="1234567802", Address="202 Engineer Ave"),
        Employee(EmployeeID=7, UserID=7, Name="Employee 3", DepartmentID=2, Position="Engineer", DateOfJoining=date(2021, 4, 25), PhoneNumber="1234567803", Address="203 Engineer Ave"),
        Employee(EmployeeID=8, UserID=8, Name="Employee 4", DepartmentID=3, Position="Sales Associate", DateOfJoining=date(2018, 9, 12), PhoneNumber="1234567804", Address="301 Sales Blvd"),
        Employee(EmployeeID=9, UserID=9, Name="Employee 5", DepartmentID=3, Position="Sales Associate", DateOfJoining=date(2019, 11, 30), PhoneNumber="1234567805", Address="302 Sales Blvd"),
        Employee(EmployeeID=10, UserID=10, Name="Employee 6", DepartmentID=3, Position="Sales Associate", DateOfJoining=date(2020, 12, 10), PhoneNumber="1234567806", Address="303 Sales Blvd"),
        Employee(EmployeeID=11, UserID=11, Name="Employee 7", DepartmentID=3, Position="Sales Associate", DateOfJoining=date(2021, 8, 5), PhoneNumber="1234567807", Address="304 Sales Blvd"),
    ]
    session.add_all(employees)
    session.commit()

    # 5. Tạo Attendances
    attendances = [
        Attendance(AttendanceID=1, EmployeeID=4, Date=date(2023, 11, 1), Status="Present", Remarks="Late"),
        Attendance(AttendanceID=2, EmployeeID=5, Date=date(2023, 11, 1), Status="Absent", Remarks="No approval"),
        Attendance(AttendanceID=3, EmployeeID=6, Date=date(2023, 11, 1), Status="Present", Remarks="Request approval"),
    ]
    session.add_all(attendances)
    session.commit()

    # 6. Tạo Leave Requests
    leave_requests = [
        LeaveRequest(LeaveRequestID=1, EmployeeID=4, StartDate=date(2023, 12, 1), EndDate=date(2024, 11, 1), Reason="Family Emergency", Status="Approved", HRManagerID=1),
        LeaveRequest(LeaveRequestID=2, EmployeeID=5, StartDate=date(2021, 11, 1), EndDate=date(2024, 11, 12), Reason="Sick Leave", Status="Pending", HRManagerID=2),
        LeaveRequest(LeaveRequestID=3, EmployeeID=6, StartDate=date(2022, 5, 10), EndDate=date(2022, 5, 20), Reason="Vacation", Status="Approved", HRManagerID=1),
        LeaveRequest(LeaveRequestID=4, EmployeeID=7, StartDate=date(2023, 3, 15), EndDate=date(2023, 3, 25), Reason="Personal", Status="Rejected", HRManagerID=2),
        LeaveRequest(LeaveRequestID=5, EmployeeID=8, StartDate=date(2023, 6, 1), EndDate=date(2023, 6, 10), Reason="Medical", Status="Approved", HRManagerID=1),
        LeaveRequest(LeaveRequestID=6, EmployeeID=9, StartDate=date(2023, 7, 20), EndDate=date(2023, 7, 30), Reason="Family Event", Status="Pending", HRManagerID=2),
    ]
    session.add_all(leave_requests)
    session.commit()

    # 7. Tạo Payslips
    payslips = [
        Payslip(PayslipID=1, EmployeeID=4, Month=11, Year=2023, GeneratedBy=1, CreatedAt=current_time),
        Payslip(PayslipID=2, EmployeeID=5, Month=10, Year=2023, GeneratedBy=2, CreatedAt=current_time),
        Payslip(PayslipID=3, EmployeeID=6, Month=9, Year=2023, GeneratedBy=1, CreatedAt=current_time),
        Payslip(PayslipID=4, EmployeeID=7, Month=8, Year=2023, GeneratedBy=2, CreatedAt=current_time),
        Payslip(PayslipID=5, EmployeeID=8, Month=7, Year=2023, GeneratedBy=1, CreatedAt=current_time),
        Payslip(PayslipID=6, EmployeeID=9, Month=6, Year=2023, GeneratedBy=2, CreatedAt=current_time),
    ]
    session.add_all(payslips)
    session.commit()

    # 8. Tạo Performance Reviews
    performances = [
        Performance(PerformanceID=1, EmployeeID=4, EvaluationDate=date(2023,10,25), TaskCompletion=60, Feedback="Great work!", Rating=5),
        Performance(PerformanceID=2, EmployeeID=5, EvaluationDate=date(2023,9,20), TaskCompletion=70, Feedback="Good job!", Rating=4),
        Performance(PerformanceID=3, EmployeeID=6, EvaluationDate=date(2023,8,15), TaskCompletion=80, Feedback="Excellent!", Rating=5),
        Performance(PerformanceID=4, EmployeeID=7, EvaluationDate=date(2023,7,10), TaskCompletion=50, Feedback="Needs improvement.", Rating=3),
        Performance(PerformanceID=5, EmployeeID=8, EvaluationDate=date(2023,6,5), TaskCompletion=90, Feedback="Outstanding!", Rating=5),
        Performance(PerformanceID=6, EmployeeID=9, EvaluationDate=date(2023,5,15), TaskCompletion=65, Feedback="Satisfactory.", Rating=4),
    ]
    session.add_all(performances)
    session.commit()

    # 9. Tạo Notifications
    notifications = [
        Notification(NotificationID=1, SenderID=1, RecipientID=4, Title="Welcome", Content="Welcome to IU Management!", IsRead=False, SentAt=current_time),
        Notification(NotificationID=2, SenderID=2, RecipientID=5, Title="Meeting Reminder", Content="Don't forget the meeting tomorrow at 10 AM.", IsRead=False, SentAt=current_time),
        Notification(NotificationID=3, SenderID=1, RecipientID=6, Title="Performance Review", Content="Your performance review is scheduled for next week.", IsRead=True, SentAt=current_time),
        Notification(NotificationID=4, SenderID=2, RecipientID=7, Title="Policy Update", Content="Please review the updated company policies.", IsRead=False, SentAt=current_time),
        Notification(NotificationID=5, SenderID=1, RecipientID=8, Title="Training Session", Content="You have a training session next Monday.", IsRead=False, SentAt=current_time),
        Notification(NotificationID=6, SenderID=2, RecipientID=9, Title="Holiday Notice", Content="The office will be closed next Friday.", IsRead=True, SentAt=current_time),
    ]
    session.add_all(notifications)
    session.commit()

    # 10. Tạo Salaries
    salaries = [
        Salary(SalaryID=1, EmployeeID=4, BasicPay=3000, Bonuses=500, Deductions=200, NetPay=3300, Month=11, Year=2023),
        Salary(SalaryID=2, EmployeeID=5, BasicPay=3200, Bonuses=400, Deductions=300, NetPay=3300, Month=10, Year=2023),
        Salary(SalaryID=3, EmployeeID=6, BasicPay=3100, Bonuses=600, Deductions=250, NetPay=3450, Month=9, Year=2023),
        Salary(SalaryID=4, EmployeeID=7, BasicPay=2900, Bonuses=300, Deductions=150, NetPay=3050, Month=8, Year=2023),
        Salary(SalaryID=5, EmployeeID=8, BasicPay=2800, Bonuses=400, Deductions=100, NetPay=3100, Month=7, Year=2023),
        Salary(SalaryID=6, EmployeeID=9, BasicPay=2700, Bonuses=500, Deductions=200, NetPay=3000, Month=6, Year=2023),
    ]
    session.add_all(salaries)
    session.commit()

    # Đóng session
    session.close()

if __name__ == "__main__":
    seed_data()
    print("create successfully!")
