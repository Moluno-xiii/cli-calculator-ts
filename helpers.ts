export type Command = "divide" | "add" | "multiply" | "help" | "subtract";

const handleCommand = (command: Command, values: string) => {
  if (!isValidCommand(command)) {
    throw new Error(
      "Invalid command, enter 'help' to check list of valid commands."
    );
  }
  if (command !== "help") {
    return handleArithmethicOperation(values, command);
  }
  console.log("Help instructions as follows:");
  console.log(
    "add : adds numbers together by calling the add command with the numbers to be added seperated by a comma, like this -> 'add 3,5,5'."
  );
  console.log(
    "subtract : subtracts numbers by calling the subtract command with the numbers to be subtracted seperated by a comma, like this -> 'subtract 3,5,5'."
  );
  console.log(
    "divide : divides numbers by calling the divide command with the numbers to be divided seperated by a comma, like this -> 'divide 3,5,5'."
  );
  console.log(
    "multiply : multiplies numbers by calling the multiply command with the numbers to be multiplied seperated by a comma, like this -> 'multiply 3,5,5'."
  );
  console.log(
    "NOTE: THE COMMAND AND THE VALUES TO BE PASSED MUST BE SEPARATED BY A SINGLE SPACE -> ' '"
  );
};

const multiply = (numbers: string[]): number => {
  const multiple = numbers.reduce((acc, cur) => Number(cur) * Number(acc), 1);
  return multiple;
};

const add = (numbers: string[]): number => {
  const addition = numbers.reduce((acc, cur) => Number(cur) + Number(acc), 0);
  return addition;
};

const subtract = (numbers: string[]): number => {
  const [first, ...rest] = numbers;
  const subtraction = rest.reduce(
    (acc, cur) => Number(acc) - Number(cur),
    Number(first)
  );
  return subtraction;
};

const divide = (numbers: string[]): number => {
  const [first, ...rest] = numbers;
  const division = rest.reduce(
    (acc, cur) => Number(acc) / Number(cur),
    Number(first)
  );
  return division;
};

const handleArithmethicOperation = (
  numbers: string,
  command: Command
): void => {
  const [input] = cleanInput(numbers);
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
      throw new Error(
        "Unknown command, enter 'help' to see list of acceptable commands"
      );
  }
};

const cleanInput = (input: string): string[] => {
  return input.trim().toLowerCase().split(/\s+/);
};

const isValidCommand = (command: string): boolean => {
  return ["divide", "add", "multiply", "subtract", "help"].includes(command);
};

export {
  isValidCommand,
  cleanInput,
  handleArithmethicOperation,
  handleCommand,
};
