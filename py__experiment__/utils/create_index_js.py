from pathlib import Path


def create_index_js(url: str, base_url: str):
    __dirname = Path(__file__).parent
    
    with open(__dirname.joinpath("mock_index.js"), "r", encoding="utf-8")as f:
        _answer = f.read()

    return _answer.replace("__URL__", url).replace("__BASE_URL__", base_url)

