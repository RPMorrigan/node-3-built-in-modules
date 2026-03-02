/* -------------------------
💎 Birthstone Finder
----------------------------
Create a program that determines the birthstone for a month inputted by the user. 

Check the README.md file for instructions.
------------------------- */

// birthstone data object
const birthstones = {
  January: "Garnet",
  February: "Amethyst",
  March: "Aquamarine",
  April: "Diamond",
  May: "Emerald",
  June: "Pearl, Alexandrite, or Moonstone",
  July: "Ruby",
  August: "Peridot",
  September: "Sapphire",
  October: "Opal or Tourmaline",
  November: "Topaz or Citrine",
  December: "Tanzanite, Zircon, or Turquoise",
};


let month = process.argv[2];

const stoneCheck = () => {
  try {
    birthstones[month]
      ? console.log(`The birthstone for ${month} is ${birthstones[month]}.`)
      : console.log('Woops! Pls capitalize.');
  } catch (error) {
    return console.error(error);
  }
}

stoneCheck();