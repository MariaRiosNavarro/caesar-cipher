// 1. Save variables

const textInput = document.querySelector('[data-js="text"]');
const keyInput = document.querySelector('[data-js="key"]');
const output = document.querySelector('[data-js="output"]');

// 2. Save Alphabet

const plaintext = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

console.log(plaintext.length); //26 -> last Index 25

const lastIndexOfArray = plaintext.length - 1; //25

const decoder = () => {
  // 3.Save values

  let text = textInput.value;
  let key = Number(keyInput.value);

  console.log("text and key", text, key);

  //   4. Save a new array Index Array

  let indexArray = [];

  indexArray = plaintext.map((letter) => plaintext.indexOf(letter));

  console.log("indexArray", indexArray);

  //   5. Add the index + value a new array Index, with the limit of 25n (lastIndexArray)

  //   let newIndex = 0;

  //   let indexArrayWithKey = [];

  //   indexArrayWithKey = indexArray.map((index) => {
  //     // All the index must to add a value
  //     for (let i = 0; i < lastIndexOfArray; i++) {
  //       let numberIndex = Number(index);
  //       newIndex = numberIndex + key;
  //       //   if we are at the end of the array (index 25), we need to count at 0, therefore - lastIndexArray
  //       if (newIndex >= lastIndexOfArray) {
  //         let newValue = numberIndex + key - lastIndexOfArray;
  //         newIndex = newValue;
  //       }
  //       return newIndex;
  //     }
  //   });

  //   console.log("withKey", indexArrayWithKey);

  //   6. Use the new index to translate

  let newLetterArray = [];

  let newText = Array.from(text);

  console.log("here", newText);

  let indexAlpha, endIndex, newLetter;

  newLetterArray = newText.map((letter) => {
    // find index
    indexAlpha = plaintext.indexOf(letter);
    console.log(indexAlpha);
    // All the index must to add a value
    endIndex = indexAlpha + key;
    // if the endIndex (index 25) is bigger as the lastIndexOfArray:  therefore - lastIndexArray
    if (endIndex >= plaintext.length) {
      let newValue = endIndex - plaintext.length;
      endIndex = newValue;
    }
    //wen we use a space we dont find it in plaintext, and we need the space later also newLetter = " ";
    if (indexAlpha === -1) {
      newLetter = " ";
    } else {
      newLetter = plaintext[endIndex];
    }
    return newLetter;
  });

  console.log("newLetterArray", newLetterArray);

  let newTextString = newLetterArray.reduce((a, b) => a + b);

  console.log(newTextString);

  output.innerHTML = newTextString;
};

// ---
