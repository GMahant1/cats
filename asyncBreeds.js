const fs = require("fs");

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFiles's Callback: it has the data.");
    if (!error) return functionToRunWhenThingsAreDone(data);
  });
};

const printOutCatBreed = breed => {
  console.log("Return Value: ", breed)
}

const bombay = breedDetailsFromFile("Bombay");

breedDetailsFromFile(bombay, printOutCatBreed);
