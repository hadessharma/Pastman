# main.py
from fastapi import FastAPI, HTTPException 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173/"],  # Allow all origins for simplicity; adjust as needed
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProxyRequest(BaseModel):
    method: str
    url: HttpUrl
    body: dict | None = None
    
@app.post("/proxy")
async def proxy(req: ProxyRequest):
    async with httpx.AsyncClient() as client:
        try:
            resp = await client.request(req.method, str(req.url), json=req.body)
        except httpx.RequestError as e:
            raise HTTPException(status_code=500, detail=str(e))
    content_type = resp.headers.get("content-type", "")
    return {
        "status_code": resp.status_code,
        "headers": dict(resp.headers),
        "body": resp.json() if content_type.startswith("application/json") else resp.text,
    }