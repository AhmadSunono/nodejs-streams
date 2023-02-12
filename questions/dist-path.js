import inquirer from "inquirer";

export const askAboutDistPath = async () => {
  const answer = await inquirer.prompt({
    name: "path",
    type: "input",
    message: "Enter the path of the file you want to work with...)",
  });

  return answer.path;
};
