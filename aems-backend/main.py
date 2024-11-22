from fastapi import FastAPI
from app.routes import auth

app = FastAPI()

# Đăng ký router cho API auth
app.include_router(auth.router, prefix="/api/v1", tags=["Authentication"])