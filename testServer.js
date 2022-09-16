const express = require('express')
const app = express()
const port = 3000
const path = require("path")


app.use(express.static('./docs'));

app.get('*', (req, res) => res.sendFile(
    path.resolve('./docs', 'index.html')
));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}
http://localhost:${[port]}`);
});