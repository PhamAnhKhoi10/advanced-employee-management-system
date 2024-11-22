from fastapi import HTTPException

# Quyền hạn cố định cho từng vai trò trong hệ thống
FIXED_ROLE_PERMISSIONS = {
    "Admin": [
        "Send Notifications",
        "Create Account",
        "Process Payments",
        "Generate Payslip"
    ],
    "HR Manager": [
        "Approve Leave Requests",
        "View Attendance Reports",
        "Record Employee Performance",
        "Check Notifications",
        "View Salary",
        "Assign Role Permission",
        "Manage Employee Details",
        "View Employee Details",
        "Create Employee Account"
    ],
    "Employee": [
        "Send Leave Requests",
        "Check Notifications",
        "View Performance",
        "Check Attendance"
    ],
}

def check_permission(role: str, permission: str):
    """
    Kiểm tra xem vai trò có quyền thực hiện hành động không.

    :param role: Vai trò của người dùng (e.g., Admin, HR Manager, Employee)
    :param permission: Quyền cần kiểm tra (e.g., "Create Account")
    :raises HTTPException: Nếu vai trò không có quyền thực hiện hành động.
    """
    if permission not in FIXED_ROLE_PERMISSIONS.get(role, []):
        raise HTTPException(status_code=403, detail=f"Permission '{permission}' denied for role '{role}'")
