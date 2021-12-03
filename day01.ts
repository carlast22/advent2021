import * as fs from "fs"

const currentInput = fs.readFileSync("inputs/day01.txt", "utf8")
const data = currentInput.split("\n").map(Number)

function calculateMeasurements(numbers: number[]): number {
  let counter = 0

  for (const [i, v] of numbers.entries()) {
    if (numbers[i + 1] && v < numbers[i + 1]) {
      counter++
    }
  }

  return counter
}

function calculatesWindow(numbers: number[]): number {
  const reducedList: number[] = []

  for (const [i, v] of numbers.entries()) {
    if (numbers[i + 2] === undefined) {
      break
    }
    const sum = v + numbers[i + 1] + numbers[i + 2]
    reducedList.push(sum)
  }

  return calculateMeasurements(reducedList)
}

console.log(calculateMeasurements(data))
console.log(calculatesWindow(data))
