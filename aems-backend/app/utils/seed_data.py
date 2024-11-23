from sqlalchemy.orm import Session
from app.models.roles import Role
from app.models.users import User
from app.models.employees import Employee
from passlib.context import CryptContext

# Mã hóa mật khẩu
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def seed_roles(db: Session):
    """
    Thêm dữ liệu vai trò mặc định vào cơ sở dữ liệu.
    :param db: Session kết nối tới cơ sở dữ liệu.
    """
    roles = [
        {"RoleID": 1, "RoleName": "Admin", "Description": "Administrator role"},
        {"RoleID": 2, "RoleName": "HR", "Description": "Human Resources role"},
        {"RoleID": 3, "RoleName": "Employee", "Description": "Employee role"}
    ]

    for role in roles:
        # Kiểm tra vai trò đã tồn tại chưa
        existing_role = db.query(Role).filter(
            Role.RoleID == role["RoleID"]).first()
        if not existing_role:
            new_role = Role(**role)
            db.add(new_role)
    db.commit()
    print("Roles have been seeded successfully.")


def seed_admin_user(db: Session):
    """
    Thêm tài khoản Admin mặc định vào cơ sở dữ liệu.
    :param db: Session kết nối tới cơ sở dữ liệu.
    """
    admin_user = {
        "Username": "admin",
        "Password": pwd_context.hash("admin123"),
        "RoleID": 1  # RoleID của Admin
    }

    # Kiểm tra xem tài khoản admin đã tồn tại chưa
    existing_user = db.query(User).filter(
        User.Username == admin_user["Username"]).first()
    if not existing_user:
        new_user = User(**admin_user)
        db.add(new_user)
        db.commit()
        print("Admin user has been seeded successfully.")
    else:
        print("Admin user already exists.")


def seed_admin_employee(db: Session):
    """
    Thêm nhân viên Admin mặc định vào cơ sở dữ liệu.
    :param db: Session kết nối tới cơ sở dữ liệu.
    """
    admin_employee = {
        "UserID": 1,  # Giả định UserID của admin
        "Name": "System Admin",
        "Department": "Administration",
        "Position": "Administrator",
        "PhoneNumber": "123456789",
        "Address": "123 Admin Street"
    }

    # Kiểm tra xem nhân viên admin đã tồn tại chưa
    existing_employee = db.query(Employee).filter(
        Employee.UserID == admin_employee["UserID"]).first()
    if not existing_employee:
        new_employee = Employee(**admin_employee)
        db.add(new_employee)
        db.commit()
        print("Admin employee has been seeded successfully.")
    else:
        print("Admin employee already exists.")


def seed_all_data(db: Session):
    """
    Gọi tất cả các hàm seed để khởi tạo dữ liệu mặc định.
    :param db: Session kết nối tới cơ sở dữ liệu.
    """
    seed_roles(db)
    seed_admin_user(db)
    seed_admin_employee(db)


# Chạy seed khi tệp được thực thi
if __name__ == "__main__":
    from app.config.database import SessionLocal  # Import kết nối cơ sở dữ liệu

    db = SessionLocal()
    try:
        seed_all_data(db)
    finally:
        db.close()
