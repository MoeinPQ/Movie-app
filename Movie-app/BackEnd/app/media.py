from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
import os

app = FastAPI()

MEDIA_DIR = "media"

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_location = f"{MEDIA_DIR}/{file.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(file.file.read())
    return {"info": f"file '{file.filename}' saved at '{file_location}'"}

@app.get("/download/{filename}")
async def download_file(filename: str):
    file_location = f"{MEDIA_DIR}/{filename}"
    return FileResponse(file_location)
