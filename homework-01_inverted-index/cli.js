import Searcher from "./searcher";
import glob from "glob";

const readline = require("readline");

const searcher = new Searcher(glob.sync("resources/*.txt"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Query: "
});

rl.prompt();
rl.on("line", line => {
    console.log(searcher.search(line.trim()));
    rl.prompt();
});
