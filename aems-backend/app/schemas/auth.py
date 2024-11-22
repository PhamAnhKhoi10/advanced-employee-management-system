from pydantic import BaseModel

# Yêu cầu đăng nhập
class LoginRequest(BaseModel):
    username: str
    password: str

# Phản hồi sau đăng nhập
class LoginResponse(BaseModel):
    employee_id: int
    name: str
    department: str
    position: str
    phone_number: str
    address: str
    role: str
