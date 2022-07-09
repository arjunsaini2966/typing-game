const quoteEle = document.getElementById("quote-ele");
const inputEle = document.getElementById("input-ele");
const btn = document.getElementById("start-btn");
const massage = document.getElementById("massage");
// take a quotes array for random quotes
let quotes = [
  "I respect faith, but doubt is what gets you an education.",
  "I respect faith, but doubt is what gets you an education.",
  "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
  "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
  "Do not confuse motion and progress. A rocking horse keeps moving but does not make any progress.",
  "There is a great difference between worry and concern. A worried person sees a problem, and a concerned person solves a problem.",
];
// a words array for showing quots on DOM or doing multiple opration on quotstext
let words = [];
let starttime = Date.now();

let wordindex = 0;
//start button things
btn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomNum];
  //split quote to rejoin with span tag
  words = quote.split(" ");

  wordindex = 0;
  const spanQuote = words.map((word) => {
    return `<span>${word} </span>`;
  });
  quoteEle.innerHTML = spanQuote.join("");

  massage.textContent = "";
  inputEle.textContent = "";
  inputEle.focus();
  quoteEle.childNodes[wordindex].className = "highlight";
  starttime = new Date().getTime();
  inputEle.value = "";
  btn.textContent = "Restart";
});

// work on input

inputEle.addEventListener("input", () => {
  let typedWord = inputEle.value;
  let currntWord = words[wordindex];

  if (typedWord === currntWord && wordindex === words.length - 1) {
    let endtime = (new Date().getTime() - starttime) / 1000;
    massage.textContent = `Congartulation You complete this task in ${endtime} Second`;
  } else if (typedWord.endsWith(" ") && currntWord === typedWord.trim()) {
    inputEle.value = "";
    quoteEle.childNodes[wordindex].className = "";

    wordindex++;
    //hihjlight the first word with css
    quoteEle.childNodes[wordindex].className = "highlight";
  }
  //showing error with css
  else if (currntWord.startsWith(typedWord)) {
    inputEle.className = "";
  } else {
    inputEle.className = "error";
  }
});
