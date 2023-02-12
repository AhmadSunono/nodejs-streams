import fs from "fs";
import readline from "readline";
import stream from "stream";
import { COMMANDS } from "../constants/commands.js";
const Transform = stream.Transform;

export const read = (filePath) => {
  const readableStream = fs.createReadStream(filePath, "utf8");

  readableStream.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });

  readableStream.on("data", (chunk) => {
    console.log(chunk);
  });
};

export const write = (filePath) => {
  const writableStream = fs.createWriteStream(filePath);

  writableStream.on("error", (error) => {
    console.log(
      `An error occured while writing to the file. Error: ${error.message}`
    );
  });

  writableStream.on("finish", () => {
    console.log(`All your sentences have been written to ${filePath}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Enter a sentence: ",
  });

  rl.prompt();

  rl.on("line", (line) => {
    switch (line.trim()) {
      case "exit":
        rl.close();
        break;
      default:
        writableStream.write(line + "\n");
        rl.prompt();
        break;
    }
  }).on("close", () => {
    writableStream.end();
    setTimeout(() => {
      process.exit(0);
    }, 100);
  });
};

export const copy = (filePath) => {
  const inputStream = fs.createReadStream(filePath);
  const fileCopyPath =
    filePath.split(".")[0] + "-copy." + filePath.split(".")[1];
  const outputStream = fs.createWriteStream(fileCopyPath);

  inputStream.pipe(outputStream);

  outputStream.on("finish", () => {
    console.log(
      `You have successfully created a ${filePath} copy. The new file name is ${fileCopyPath}.`
    );
  });
};

export const upper = (filePath) => {
  const readStream = fs.createReadStream(filePath);
  const upperDataFilePath =
    filePath.split(".")[0] + "-upper-case." + filePath.split(".")[1];
  const writeStream = fs.createWriteStream(upperDataFilePath);

  const upperStream = new Transform({
    transform(chunk, _encoding, next) {
      const upperChunk = chunk.toString().toUpperCase();
      this.push(upperChunk);
      next();
    },
  });

  readStream
    .pipe(upperStream)
    .pipe(writeStream)
    .on("finish", () => {
      console.log(
        `Finished transforming the contents of ${filePath} to upper case, and saving the output to ${upperDataFilePath}.`
      );
    });
};

export const commandHandlerMapper = {
  [COMMANDS[0]]: read,
  [COMMANDS[1]]: write,
  [COMMANDS[2]]: copy,
  [COMMANDS[3]]: upper,
};
