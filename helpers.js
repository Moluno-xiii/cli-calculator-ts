"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCommand = exports.handleArithmethicOperation = exports.cleanInput = exports.isValidCommand = void 0;
var handleCommand = function (command, values) {
    if (!isValidCommand(command)) {
        throw new Error("Invalid command, enter 'help' to check list of valid commands.");
    }
    if (command !== "help") {
        return handleArithmethicOperation(values, command);
    }
    console.log("Help instructions as follows:");
    console.log("add : adds numbers together by calling the add command with the numbers to be added seperated by a comma, like this -> 'add 3,5,5'.");
    console.log("subtract : subtracts numbers by calling the subtract command with the numbers to be subtracted seperated by a comma, like this -> 'subtract 3,5,5'.");
    console.log("divide : divides numbers by calling the divide command with the numbers to be divided seperated by a comma, like this -> 'divide 3,5,5'.");
    console.log("multiply : multiplies numbers by calling the multiply command with the numbers to be multiplied seperated by a comma, like this -> 'multiply 3,5,5'.");
    console.log("NOTE: THE COMMAND AND THE VALUES TO BE PASSED MUST BE SEPARATED BY A SINGLE SPACE -> ' '");
};
exports.handleCommand = handleCommand;
var multiply = function (numbers) {
    var multiple = numbers.reduce(function (acc, cur) { return Number(cur) * Number(acc); }, 1);
    return multiple;
};
var add = function (numbers) {
    var addition = numbers.reduce(function (acc, cur) { return Number(cur) + Number(acc); }, 0);
    return addition;
};
var subtract = function (numbers) {
    var first = numbers[0], rest = numbers.slice(1);
    var subtraction = rest.reduce(function (acc, cur) { return Number(acc) - Number(cur); }, Number(first));
    return subtraction;
};
var divide = function (numbers) {
    var first = numbers[0], rest = numbers.slice(1);
    var division = rest.reduce(function (acc, cur) { return Number(acc) / Number(cur); }, Number(first));
    return division;
};
var handleArithmethicOperation = function (numbers, command) {
    var input = cleanInput(numbers)[0];
    switch (command) {
        case "multiply":
            console.log(multiply(input.split(",")).toLocaleString());
            break;
        case "add":
            console.log(add(input.split(",")).toLocaleString());
            break;
        case "subtract":
            console.log(subtract(input.split(",")).toLocaleString());
            break;
        case "divide":
            console.log(divide(input.split(",")).toLocaleString());
            break;
        default:
            throw new Error("Unknown command, enter 'help' to see list of acceptable commands");
    }
};
exports.handleArithmethicOperation = handleArithmethicOperation;
var cleanInput = function (input) {
    return input.trim().toLowerCase().split(/\s+/);
};
exports.cleanInput = cleanInput;
var isValidCommand = function (command) {
    return ["divide", "add", "multiply", "subtract", "help"].includes(command);
};
exports.isValidCommand = isValidCommand;
