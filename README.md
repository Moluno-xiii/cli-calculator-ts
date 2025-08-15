# Command-Line Calculator

This is a simple command-line calculator built in Node.js that supports basic arithmetic operations (addition, subtraction, multiplication, and division) through user input.

- Built with Typescript.

## Features

- Basic arithmetic operations:
  - **Addition**: Adds numbers together.
  - **Subtraction**: Subtracts numbers.
  - **Multiplication**: Multiplies numbers together.
  - **Division**: Divides numbers.
- Support for **comma-separated values**.
- **Help** command to guide the user on how to use the calculator.
- Command validation to ensure only valid operations are processed.

## Requirements

- Node.js (version 12.x or higher)

## Installation

To get started, clone this repository and install the necessary dependencies.

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/calculator-cli.git
   cd calculator-cli
   ```

2. Run the application:

```bash
node main.js
```

### Usage

```bash
Input an instruction > add 3,5,7
15

Input an instruction > multiply 2,3,5
30

Input an instruction > divide 20,5,2
2

Input an instruction > subtract 10,5,3
2

Input an instruction > help
Help instructions as follows:
add : adds numbers together by calling the add command with the numbers to be added separated by a comma, like this -> 'add 3,5,5'.
subtract : subtracts numbers by calling the subtract command with the numbers to be subtracted separated by a comma, like this -> 'subtract 3,5,5'.
divide : divides numbers by calling the divide command with the numbers to be divided separated by a comma, like this -> 'divide 3,5,5'.
multiply : multiplies numbers by calling the multiply command with the numbers to be multiplied separated by a comma, like this -> 'multiply 3,5,5'.
NOTE: THE COMMAND AND THE VALUES TO BE PASSED MUST BE SEPARATED BY A SINGLE SPACE -> ' '
```
