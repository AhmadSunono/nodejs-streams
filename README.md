# NodeJS streams!

This project is mainly an application for nodejs streams. But then I decided to try some interactive cli tools, something like this:

![Interactive CLI](https://user-images.githubusercontent.com/47748181/218333527-a9f5311c-3449-412c-969c-91d8bbf886d1.png)

## How to setup

All you need to setup this project is to run `npm i` on the main directory to install needed packages.

## interactive cli

To run the **interactive** cli, run the command

    npm start

## Normal cli

    $ ./cli-streams-program <command> <path_to_file>

#### \<command> can be:

- read: Print a file's contents to the terminal
- write: Write a message from the terminal to a file
- copy: Create a copy of a file in the current directory
- upperCase: Transform the content of a file into upper case and save its output to another file.

#### <path_to_file> is the path to the file you want to work with.
