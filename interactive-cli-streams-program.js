import { askAboutDesiredCommand } from "./questions/command.js";
import { askAboutDistPath } from "./questions/dist-path.js";
import { sayWelcome } from "./screens/welcome-screen.js";
import { commandHandlerMapper } from "./utils/file-operations.js";
import { wait } from "./utils/helpers.js";

const start = async () => {
  console.clear();
  sayWelcome();

  await wait(3000);

  const command = await askAboutDesiredCommand();
  const handler = commandHandlerMapper[command];

  const path = await askAboutDistPath();
  handler(path);
};

await start();
