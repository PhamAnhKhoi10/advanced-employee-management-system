from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


# Hash mật khẩu admin
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


print(hashed_password1)
print(hashed_password2)
print(hashed_password3)
print(hashed_password4)
print(hashed_password5)
print(hashed_password6)
print(hashed_password7)
print(hashed_password8)
print(hashed_password9)
print(hashed_password10)
