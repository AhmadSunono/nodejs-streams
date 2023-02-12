import inquirer from "inquirer";
import { COMMANDS } from "../constants/commands.js";

export const askAboutDesiredCommand = async () => {
  const answer = await inquirer.prompt({
    name: "command",
    type: "list",
    message: "Select command you want to execute...)",
    choices: COMMANDS,
  });

  return answer.command;
};
