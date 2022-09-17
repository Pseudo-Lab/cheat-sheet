from urllib.parse import urljoin


def create_index_html(url: str, base_url: str) -> str:

    return f"""<!DOCTYPE html>
<html lang="en">

<head><link rel="stylesheet" href="{urljoin(url, base_url+"/index.css")}">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000">
    <meta name="description" content="Web site created using create-react-app">
    <link rel="icon" type="image/x-icon" href="{urljoin(url, base_url+"/logo.ico")}">

    <title>matplotlib cheatsheet</title>
</head>

<body>

    <div id="app"></div>
    <script src="{urljoin(url, base_url+ "/index.js")}" defer=""></script>

</body>

</html>"""
