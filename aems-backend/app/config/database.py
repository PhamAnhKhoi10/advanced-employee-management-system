from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base  # Updated import

DATABASE_URL='mysql+mysqlconnector://mailongthien:mailongthien111@localhost:3306/aems'

# Add error handling for missing environment variable
if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is not set")

# Create engine
engine = create_engine(DATABASE_URL)

# Create session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create base class using newer SQLAlchemy 2.0 style
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
