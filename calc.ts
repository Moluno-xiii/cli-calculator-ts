import { createInterface } from "readline";
import { handleCommand, Command } from "./helpers";

const init = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Input an instruction > ",
  });
  rl.prompt();
  rl.on("line", (line) => {
    const [command, values] = line.split(" ");
    if (!line.length) {
      rl.prompt();
      return;
    }

    try {
      handleCommand(command.toLowerCase() as Command, values);
    } catch (err) {
      console.error(
        err instanceof Error ? err.message : "Unexpected error, try again."
      );
    } finally {
      rl.prompt();
    }
  }).on("close", () => {
    console.log("\nClosing...");
  });
};

export default init;
