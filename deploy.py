from pathlib import Path
from argparse import ArgumentParser


def _predeploy(base_url, base_name):
    """
    params:
    - `base_url: str`          e.g. "https://pseudo-lab.github.io"
    - `base_name: str`         e.g. "/cheat-sheet"
    """

    __dirname = Path(__file__).parent
    with open(__dirname.joinpath("docs/index.html"), "r", encoding="utf-8") as f:
        index_html = f.read().replace("__URL__", base_url + base_name)
    with open(__dirname.joinpath("docs/index.769f847c.js"), "r", encoding="utf-8") as f:
        index_js = (
            f.read()
            .replace("__BASE_URL__", base_url)
            .replace("__BASE_NAME__", base_name)
        )

    with open(__dirname.joinpath("docs/index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)
    with open(__dirname.joinpath("docs/index.769f847c.js"), "w", encoding="utf-8") as f:
        f.write(index_js)


def deploy():
    parser = ArgumentParser()
    parser.add_argument("--deploy", type=bool, default=False)
    parser.add_argument("--base_url", type=str, default="")
    parser.add_argument("--base_name", type=str, default="")
    args = parser.parse_args()

    if args.deploy:
        _predeploy(base_url=args.base_url, base_name=args.base_name)


if __name__ == "__main__":
    deploy()
