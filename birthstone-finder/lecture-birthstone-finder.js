/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.
------------------------- */

// ES module
import fs from 'fs/promises';
// User input
let month = process.argv[2];

async function stoneCheck () {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        const birthstones = JSON.parse(data);

        birthstones[month]
            ? console.log(`The birthstone for ${month} is ${birthstones[month]}`)
            : console.log('Try again. Please make sure to capitalize your input.');

        } catch (error) {
        return console.error(error);
    }
};

stoneCheck();