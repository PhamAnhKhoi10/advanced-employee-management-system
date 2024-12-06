from pydantic import BaseModel

class AssignRole(BaseModel):
    UserID: int
    RoleID: int
