// 1. Save variables

const textInput = document.querySelector('[data-js="text"]');
const keyInput = document.querySelector('[data-js="key"]');
const output = document.querySelector('[data-js="output"]');

// 1.a Save Alphabet

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

const decoder = () => {
  // 2.Save values

  let text = textInput.value;
  let key = Number(keyInput.value);

  //   console.log("text and key", text, key);

  // 3. Error handling, error message if the user dont use plaintext characters or space (" ")

  const regex = /^[a-zA-Z ]*$/; //a to z & A to Z + space " ";

  if (!regex.test(text)) {
    output.innerHTML = `<p class ="alert"> Please use only letters (lowercase or uppercase) and spaces </p>`;
    return;
  }

  //4. We create a Array from Text

  let newText = Array.from(text);

  // 5. Create help variables:

  let indexAlpha, endIndex, newLetter;

  //   6. Create empty decode Array for output  plaintext -> newletterArray

  let newLetterArray = [];

  newLetterArray = newText.map((letter) => {
    // 6.1-find index of letter in main Array
    indexAlpha = plaintext.indexOf(letter);
    // 6.2-All the index must to add a value of the Key
    endIndex = indexAlpha + key;
    // 6.3-if the endIndex (index 25) is bigger as the plaintext.length, we cann not use this index as endIndex
    if (endIndex >= plaintext.length) {
      let newValue = endIndex - plaintext.length;
      endIndex = newValue;
    }
    //6.4-Wen we use a space, we dont find it in plaintext, and we need the space later also newLetter = " ";
    if (indexAlpha === -1) {
      newLetter = " ";
    } else {
      newLetter = plaintext[endIndex];
    }
    return newLetter;
  });

  //   console.log("newLetterArray", newLetterArray);

  // 7. We reduce our array as new string

  let newTextString = newLetterArray.reduce((a, b) => a + b);

  console.log(newTextString);
  console.log(typeof newTextString);
  // 8. Decoder Output
  output.innerHTML = output.innerHTML = `<p class="red">${newTextString}<p>`;
};

// --- NOTE:

const encoder = () => {
  // remove old values

  output.innerHTML = " ";

  // 2.Save values

  let text = textInput.value;
  let key = Number(keyInput.value);

  //   console.log("text and key", text, key);

  // 3. Error handling, error message if the user dont use plaintext characters or space (" ")

  const regex = /^[a-zA-Z ]*$/; //a to z & A to Z + space " ";

  if (!regex.test(text)) {
    output.innerHTML = `<p class ="alert"> Please use only letters (lowercase or uppercase) and spaces </p>`;
    return;
  }

  //4. We create a Array from Text

  let newText = Array.from(text);

  // 5. Create help variables:

  let indexAlpha, endIndex, newLetter;

  //   6. Create empty decode Array for output  plaintext -> newletterArray

  let newLetterArray = [];

  newLetterArray = newText.map((letter) => {
    // 6.1-find index of letter in main Array
    indexAlpha = plaintext.indexOf(letter);
    // 6.2-THIS TIME the index must to REMOVE the value of the Key
    endIndex = indexAlpha - key;
    // 6.3- If the endIndex is smaller as 0, we cann not use this index as endIndex, we add the length of the array to habe the last number
    if (endIndex < 0) {
      console.log("indexAlpha, endIndex", indexAlpha, endIndex);
      let newValue = endIndex + plaintext.length;
      endIndex = newValue;
    }
    //6.4-Wen we use a space, we dont find it in plaintext, and we need the space later also newLetter = " ";
    if (indexAlpha === -1) {
      newLetter = " ";
    } else {
      newLetter = plaintext[endIndex];
    }
    return newLetter;
  });

  //   console.log("newLetterArray", newLetterArray);

  // 7. We reduce our array as new string

  let newTextString = newLetterArray.reduce((a, b) => a + b);

  console.log(newTextString);
  console.log(typeof newTextString);
  // 8. Decoder Output
  output.innerHTML = `<p class="green">${newTextString}<p>`;
};

//remove alert if click inside the Text input
textInput.addEventListener("click", () => {
  output.innerHTML = "";
});
