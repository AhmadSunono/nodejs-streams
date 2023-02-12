import chalkAnimation from "chalk-animation";
import welcome from "cli-welcome";
import { createRequire } from "module";
import figlet from "figlet";
import chalk from "chalk";

const packageJson = createRequire(import.meta.url)("../package");

export const welcomeHeader = () => {
  welcome({
    title: packageJson.name,
    tagLine: `Welcome to NodeJS Streams Program`,
    description: packageJson.description,
    version: packageJson.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
  });
};

export const drawASCII = () => {
  console.log(
    chalk.yellow(
      figlet.textSync("Streams", {
        horizontalLayout: "full",
        font: "Soft",
      })
    )
  );
};

export const author = () => {
  const animation = chalkAnimation.karaoke("Developed By Ahmed Sonouno", 2);
  setTimeout(() => {
    animation.stop();
  }, 3000);
};

export const sayWelcome = () => {
  welcomeHeader();
  drawASCII();
  author();
};
