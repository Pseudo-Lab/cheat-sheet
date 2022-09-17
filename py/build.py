from pathlib import Path
from argparse import ArgumentParser

from utils import create_index_html, create_index_js


def build(url, base_url):
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
    parser = ArgumentParser()
    parser.add_argument("--url", "-U", type=str, default="")
    parser.add_argument("--base_url", "-BU", type=str, default="")
    args = parser.parse_args()

    build(url=args.url, base_url=args.base_url)
