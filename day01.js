"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const currentInput = fs.readFileSync("inputs/day01.txt", "utf8");
const data = currentInput.split("\n").map(Number);
function calculateMeasurements(numbers) {
    let counter = 0;
    for (const [i, v] of numbers.entries()) {
        if (numbers[i + 1] && v < numbers[i + 1]) {
            counter++;
        }
    }
    return counter;
}
function calculatesWindow(numbers) {
    const reducedList = [];
    for (const [i, v] of numbers.entries()) {
        if (numbers[i + 2] === undefined) {
            break;
        }
        const sum = v + numbers[i + 1] + numbers[i + 2];
        reducedList.push(sum);
    }
    return calculateMeasurements(reducedList);
}
console.log(calculateMeasurements(data));
console.log(calculatesWindow(data));
