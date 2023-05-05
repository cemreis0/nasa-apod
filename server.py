from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from colorthief import ColorThief 

app = FastAPI()

origins = [
  "*"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins = origins,
  allow_credentials=True,
  allow_methods=["GET"],
  allow_headers=["*"],
)

@app.get("/getapod/{date}")
async def getapod_date(date: str):
  api_key = "bMnrC6qR1zVWGnGLPhdqzCaI9wk2f7Os6WINeNRQ"
  apod = requests.get(f"https://api.nasa.gov/planetary/apod?api_key={api_key}&date={date}")
  return {apod.text}