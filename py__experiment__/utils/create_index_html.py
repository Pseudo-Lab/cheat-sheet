from pathlib import Path


def create_index_html(url: str, base_url: str) -> str:
    url = Path(url)
    url = url.joinpath(base_url)

    return f"""<!DOCTYPE html>
<html lang="en">

<head><link rel="stylesheet" href="{url.joinpath("index.css")}">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="Web site created using create-react-app">
    <link rel="icon" type="image/x-icon" href="{url.joinpath("logo.ico")}">

    <title>matplotlib cheatsheet</title>
</head>

<body>

    <div id="app"></div>
    <script src="{url.joinpath("index.js")}" defer=""></script>

</body>

</html>"""
