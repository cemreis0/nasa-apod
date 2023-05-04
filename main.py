from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

origins = [
  "http://127.0.0.1:5500"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins = origins,
  allow_credentials=True,
  allow_methods=["GET"],
  allow_headers=["*"],
)

@app.get("/getapod")
async def getapod():
  api_key = "bMnrC6qR1zVWGnGLPhdqzCaI9wk2f7Os6WINeNRQ"
  apod = requests.get(f"https://api.nasa.gov/planetary/apod?api_key={api_key}")
  return {apod.text}

@app.get("/getapod/{date}")
async def getapod_date(date: str | None = None):
  api_key = "bMnrC6qR1zVWGnGLPhdqzCaI9wk2f7Os6WINeNRQ"
  apod = requests.get(f"https://api.nasa.gov/planetary/apod?api_key={api_key}&date={date}")
  return {apod.text}