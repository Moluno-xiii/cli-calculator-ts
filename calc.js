"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var helpers_1 = require("./helpers");
var init = function () {
    var rl = (0, readline_1.createInterface)({
        input: process.stdin,
        output: process.stdout,
        prompt: "Input an instruction > ",
    });
    rl.prompt();
    rl.on("line", function (line) {
        var _a = line.split(" "), command = _a[0], values = _a[1];
        if (!line.length) {
            rl.prompt();
            return;
        }
        try {
            (0, helpers_1.handleCommand)(command.toLowerCase(), values);
        }
        catch (err) {
            console.error(err instanceof Error ? err.message : "Unexpected error, try again.");
        }
        finally {
            rl.prompt();
        }
    }).on("close", function () {
        console.log("\nClosing...");
    });
};
exports.default = init;
