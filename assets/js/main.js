// 1. Save variables

const textInput = document.querySelector('[data-js="text"]');
const keyInput = document.querySelector('[data-js="key"]');
const output = document.querySelector('[data-js="output"]');

// 1.a Save array with the acepted characters

const plaintext = [
  "7",
  "a",
  "b",
  "2",
  "c",
  "d",
  "e",
  "9",
  "f",
  "1",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "3",
  "m",
  "n",
  "o",
  "p",
  "q",
  "5",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "6",
  "z",
  " ",
  "?",
  "!",
  "#",
  "*",
  "8",
  "'",
  "&",
  "%",
  "=",
  ":",
  "0",
  ";",
  ".",
  ",",
  "-",
  "_",
  "4",
];

const decoder = () => {
  // remove old values
  output.innerHTML = " ";

  // 2.Save values

  let text = textInput.value.toLowerCase();
  let key = Number(keyInput.value);

  // 3. Add new decode Array (we cut the original with the key and add the end before)

  let secretAlphabet = [];
  secretAlphabet = plaintext.slice(key).concat(plaintext.slice(0, key));

  //4. We create a Array from Text

  let initialTextArray = Array.from(text);

  // 5. Create help variables:

  let index, newLetter;

  //   6. Create empty decode Array for output  plaintext -> newletterArray

  let newLetterArray = [];

  newLetterArray = initialTextArray.map((letter) => {
    // 6.1-find index of letter in main Array
    index = plaintext.indexOf(letter);
    // 6.2-the same index in the secretAlphabet array
    newLetter = secretAlphabet[index];
    return newLetter;
  });

  // 7. We reduce our array as new string

  let newTextString = newLetterArray.reduce((a, b) => a + b);

  // 8. Decoder Output
  output.innerHTML = output.innerHTML = `<p class="red">${newTextString}<p>`;
};

const encoder = () => {
  // remove old values
  output.innerHTML = " ";
  // 2B.Save values
  let text = textInput.value.toLowerCase();
  let key = Number(keyInput.value);

  // 3B. Add new decode Array (we cut the original with the key and add the end before)
  let secretAlphabet = [];
  secretAlphabet = plaintext.slice(key).concat(plaintext.slice(0, key));

  //4B. We create a Array from Text
  let initialTextArray = Array.from(text);
  // 5B. Create help variables:

  let index, newLetter;
  //   6B. Create empty decode Array for output  plaintext -> newletterArray
  let newLetterArray = [];
  newLetterArray = initialTextArray.map((letter) => {
    // 6.1B-find index of letter in Secret Array
    index = secretAlphabet.indexOf(letter);
    // 6.2B-the same index in the plain array
    newLetter = plaintext[index];
    return newLetter;
  });
  //   console.log("newLetterArray", newLetterArray);
  // 7. We reduce our array as new string
  let newTextString = newLetterArray.reduce((a, b) => a + b);
  // 8. Decoder Output
  output.innerHTML = output.innerHTML = `<p class="red">${newTextString}<p>`;
};

//remove alert if click inside the Text input
textInput.addEventListener("click", () => {
  output.innerHTML = "";
});
