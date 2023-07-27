import { exec } from "child_process";
import { promisify } from "util";


import Command from "../interfaces/Command";


const execPromise = promisify(exec);

export const runCommand = async (command: Command): Promise<string> => {
  try {
    const { stdout, stderr } = await execPromise(command.command);
    if (stderr) {
      throw new Error(stderr);
    }
    return stdout.trim();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("unknown-error while running command");
    }
  }
}