const { exec } = require("node:child_process");
const { watch } = require("node:fs");
const { stdout } = require("node:process");
const path = require("path")

exec("parcel build --dist-dir docs", (error, stdout) => {
    console.log(stdout);
    exec("node testServer.js", (error, stdout) => {
        console.log(stdout);
    });
});



watch(path.join(__dirname, "src"), (eventType, fileName) => {
    console.log(`${fileName} has been changed! This app will be rebuilded! `)
    exec("parcel build --dist-dir docs");
    exec("node testServer.js");
})

