from pathlib import Path
from argparse import ArgumentParser
import json
from utils import create_index_html, create_index_js


def build(url="", base_url=""):
    """
    params:
    - `base_url: str`          e.g. "https://pseudo-lab.github.io"
    - `base_name: str`         e.g. "/cheat-sheet"
    """

    __dirname = Path(__file__).parent
    print(__dirname)
    with open(__dirname.joinpath("docs/index.html"), "w", encoding="utf-8") as f:
        f.write(create_index_html(url, base_url))
    with open(__dirname.joinpath("docs/index.js"), "w", encoding="utf-8") as f:
        f.write(create_index_js(url, base_url))


if __name__ == "__main__":
    __dirname = Path(__file__).parent

    with open(__dirname.joinpath("config.json"), "r", encoding="utf-8") as f:
        config = json.load(f)
    print(config)

    build(url=config["url"], base_url=config["base_url"])
