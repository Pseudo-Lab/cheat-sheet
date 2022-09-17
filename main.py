from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/", StaticFiles(directory="docs", html=True), name="static")
# uvicorn main:app --reload
# 
# 만약 node 및 npm 환경이 구축되어 있지 않다면
# 간단하게 python기반의 fastapi로 구동해볼 수도 있습니다.
