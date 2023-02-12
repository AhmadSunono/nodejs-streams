export const getHelpText = () => {
  const helpText = `
    streams-program is a simple cli program to demonstrate how to handle files using streams.
    usage:
        streams-program <command> <path_to_file>

        <command> can be:
        read: Print a file's contents to the terminal
        write: Write a message from the terminal to a file
        copy: Create a copy of a file in the current directory
        upperCase: Transform the content of a file into upper case and save its output to another file.

        <path_to_file> is the path to the file you want to work with.
    `;
  console.log(helpText);
};
