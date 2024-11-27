from pydantic import BaseModel

# Yêu cầu đăng nhập


class LoginRequest(BaseModel):
    username: str
    password: str

# Phản hồi sau đăng nhập


class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "Bearer"
    employee_id: int
    name: str
    departmentID: int
    position: str
    phone_number: str
    address: str
    roleID: int
