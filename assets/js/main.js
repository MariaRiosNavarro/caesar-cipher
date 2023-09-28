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
  //   "f",
  //   "g",
  //   "h",
  //   "i",
  //   "j",
  //   "k",
  //   "l",
  //   "m",
  //   "n",
  //   "o",
  //   "p",
  //   "q",
  //   "r",
  //   "s",
  //   "t",
  //   "u",
  //   "v",
  //   "w",
  //   "x",
  //   "y",
  //   "z",
];

console.log(plaintext.length); //26 -> last Index 25

const lastIndexOfArray = plaintext.length - 1; //25

const decoder = () => {
  // 3.Save values

  let text = textInput.value;
  let key = Number(keyInput.value);
  let index = "";

  console.log(text, key);

  //   4. Save a new array Index Array

  let indexArray = [];

  indexArray = plaintext.map((letter) => plaintext.indexOf(letter));

  console.log("indexArray", indexArray);

  //   5. Add the index + value a new array Index, with the limit of 25n (lastIndexArray)

  let newIndex = 0;

  let indexArrayWithKey = [];

  indexArrayWithKey = indexArray.map((index) => {
    // All the index must to add a value
    for (let i = 0; i < lastIndexOfArray; i++) {
      let numberIndex = Number(index);
      newIndex = numberIndex + key;
      //   if we are at the end of the array (index 25), we need to count at 0, therefore - lastIndexArray
      if (newIndex >= lastIndexOfArray) {
        let newValue = numberIndex + key - lastIndexOfArray;
        newIndex = newValue;
      }
      return newIndex;
    }
  });

  console.log("withKey", indexArrayWithKey);

  //   6. Use the new index to make a new output array

  let newLetterArray = [];

  // Array.from()
};

// ---

// test

// const encoder = () => {
//   // 3.Save values

//   let text = textInput.value;
//   let key = keyInput.value;

//   console.log(text, key);
// };
