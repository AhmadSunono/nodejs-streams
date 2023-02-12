#!/usr/bin/env node

import { getHelpText } from "./utils/cli-help-text.js";
import { commandHandlerMapper } from "./utils/file-operations.js";

const args = process.argv;

let command = "";

if (args.length < 3) {
  getHelpText();
  process.exit(0);
} else if (args.length > 4) {
  console.log("More arguments provided than expected");
  getHelpText();
  process.exit(0);
} else {
  command = args[2];
  if (!args[3]) {
    console.log("This tool requires at least one path to a file");
    getHelpText();
    process.exit(0);
  }
}

let handler = commandHandlerMapper[command];
handler(args[3]);
