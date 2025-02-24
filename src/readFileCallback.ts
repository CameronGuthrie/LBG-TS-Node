/*
import { readFile } from "fs";

readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data)
    }
});
*/

import { readFile } from "fs/promises";

async function readFileAsync(): Promise<void> {
    try {
        const data = await readFile("example.txt", "utf8");
        console.log("File content:", data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readFileAsync();