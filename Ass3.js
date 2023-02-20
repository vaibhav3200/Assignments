//Write a JavaScript program to capitalize the first letter of each word of a given string.
const mySentence = "yash technology is good place to work.";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
var capitalSentence = words.join(" ");
console.log(capitalSentence);