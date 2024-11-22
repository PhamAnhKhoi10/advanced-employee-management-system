from sqlalchemy.orm import Session
from app.models.roles import Role


def seed_roles(db: Session):
    """
    Seed các vai trò cố định vào bảng roles trong cơ sở dữ liệu.
    :param db: Session kết nối tới database
    """
    roles = [
        {"RoleID": 1, "RoleName": "Admin", "Description": "Administrator role"},
        {"RoleID": 2, "RoleName": "HR", "Description": "Human Resources role"},
        {"RoleID": 3, "RoleName": "Employee", "Description": "Employee role"}
    ]

    for role in roles:
        # Kiểm tra xem vai trò đã tồn tại chưa
        existing_role = db.query(Role).filter(Role.RoleID == role["RoleID"]).first()
        if not existing_role:
            new_role = Role(**role)
            db.add(new_role)
    db.commit()
