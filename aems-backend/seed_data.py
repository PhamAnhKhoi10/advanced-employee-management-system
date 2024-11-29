from datetime import datetime
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
        User(UserID=1, Username="admin", Password=hashed_admin_password, RoleID=1, Email="admin@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=2, Username="hr1", Password=hashed_password1, RoleID=2, Email="hr1@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=3, Username="hr2", Password=hashed_password2, RoleID=2, Email="hr2@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=4, Username="hr3", Password=hashed_password3, RoleID=2, Email="hr3@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=5, Username="emp1", Password=hashed_password4, RoleID=3, Email="emp1@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=6, Username="emp2", Password=hashed_password5, RoleID=3, Email="emp2@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=7, Username="emp3", Password=hashed_password6, RoleID=3, Email="emp3@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=8, Username="emp4", Password=hashed_password7, RoleID=3, Email="emp4@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=9, Username="emp5", Password=hashed_password8, RoleID=3, Email="emp5@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=10, Username="emp6", Password=hashed_password9, RoleID=3, Email="emp6@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
        User(UserID=11, Username="emp7", Password=hashed_password10, RoleID=3, Email="emp7@example.com", CreatedAt=datetime.now(), UpdatedAt=datetime.now()),
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
        Employee(EmployeeID=1, UserID=2, Name="HR Manager 1", DepartmentID=1, Position="HR Manager", DateOfJoining="2020-01-15", PhoneNumber="1234567890", Address="123 HR Street",),
        Employee(EmployeeID=2, UserID=3, Name="HR Manager 2", DepartmentID=1, Position="HR Manager", DateOfJoining="2021-03-01", PhoneNumber="1234567891", Address="124 HR Street"),
        Employee(EmployeeID=3, UserID=4, Name="HR Manager 3", DepartmentID=1, Position="HR Manager", DateOfJoining="2022-06-10", PhoneNumber="1234567892", Address="125 HR Street"),
        Employee(EmployeeID=4, UserID=5, Name="Employee 1", DepartmentID=2, Position="Engineer", DateOfJoining="2019-07-20", PhoneNumber="1234567801", Address="201 Engineer Ave"),
        Employee(EmployeeID=5, UserID=6, Name="Employee 2", DepartmentID=2, Position="Engineer", DateOfJoining="2020-10-15", PhoneNumber="1234567802", Address="202 Engineer Ave"),
        Employee(EmployeeID=6, UserID=7, Name="Employee 3", DepartmentID=2, Position="Engineer", DateOfJoining="2021-04-25", PhoneNumber="1234567803", Address="203 Engineer Ave"),
        Employee(EmployeeID=7, UserID=8, Name="Employee 4", DepartmentID=3, Position="Sales Associate", DateOfJoining="2018-09-12", PhoneNumber="1234567804", Address="301 Sales Blvd"),
        Employee(EmployeeID=8, UserID=9, Name="Employee 5", DepartmentID=3, Position="Sales Associate", DateOfJoining="2019-11-30", PhoneNumber="1234567805", Address="302 Sales Blvd"),
        Employee(EmployeeID=9, UserID=10, Name="Employee 6", DepartmentID=3, Position="Sales Associate", DateOfJoining="2020-12-10", PhoneNumber="1234567806", Address="303 Sales Blvd"),
        Employee(EmployeeID=10, UserID=11, Name="Employee 7", DepartmentID=3, Position="Sales Associate", DateOfJoining="2021-08-05", PhoneNumber="1234567807", Address="304 Sales Blvd"),
    ]
    session.add_all(employees)
    session.commit()

    # 5. Tạo Attendances
    attendances = [
        Attendance(AttendanceID=1, EmployeeID=4, Date=date(2023, 11, 1), Status="Present", HoursWorked=8),
        Attendance(AttendanceID=2, EmployeeID=5, Date=date(2023, 11, 1), Status="Absent", HoursWorked=0),
        Attendance(AttendanceID=3, EmployeeID=6, Date=date(2023, 11, 1), Status="Present", HoursWorked=7),
    ]
    session.add_all(attendances)
    session.commit()

    # 6. Tạo Leave Requests
    leave_requests = [
        LeaveRequest(LeaveRequestID=1, EmployeeID=4, StartDate="2023-11-05", EndDate="2023-11-06", Reason="Family Emergency", Status="Approved", HRManagerID=1),
        LeaveRequest(LeaveRequestID=2, EmployeeID=5, StartDate="2023-11-10", EndDate="2023-11-11", Reason="Sick Leave", Status="Pending", HRManagerID=2),
    ]
    session.add_all(leave_requests)
    session.commit()

    # 7. Tạo Payslips
    payslips = [
        Payslip(PayslipID=1, EmployeeID=4, Month=11, Year=2023, GeneratedBy=1, CreatedAt=datetime.now()),
    ]
    session.add_all(payslips)
    session.commit()

    # 8. Tạo Performance Reviews
    performances = [
        Performance(PerformanceID=1, EmployeeID=4, EvaluationDate="2023-10-25", TaskCompletion=60, Feedback="Great work!", Rating=5),
    ]
    session.add_all(performances)
    session.commit()

    # 9. Tạo Notifications
    notifications = [
        Notification(NotificationID=1, SenderID=1, RecipientID=4, Title="Welcome", Content="Welcome to IU Management!", IsRead=False, SentAt=datetime.now()),
    ]
    session.add_all(notifications)
    session.commit()

    # 10. Tạo Salaries
    salaries = [
        Salary(SalaryID=1, EmployeeID=4, BasicPay=3000, Bonuses=500, Deductions=200, NetPay=3300, Month=11, Year=2023),
    ]
    session.add_all(salaries)
    session.commit()

    # Đóng session
    session.close()

if __name__ == "__main__":
    seed_data()
    print("create successfully!")
