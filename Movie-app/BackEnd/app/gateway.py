from fastapi import FastAPI
from .routers import home, admin, auth

app = FastAPI()

app.include_router(home.router)
app.include_router(admin.router)
app.include_router(auth.router)
