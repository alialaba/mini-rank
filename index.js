/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:



event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.querySelector("#box");
const text = document.querySelector("#text");

box.addEventListener("focus", function() {
    text.textContent = "Type a Number between 1- 5";
})
box.addEventListener("focusout", function() {
    text.textContent = "Click here to give rate";
})

box.addEventListener("keyup", function(event) {
    // console.log("keyup", keyEmoji[event.keyCode]);
    text.textContent = keyEmoji[event.keyCode];
})

const keyEmoji = {
    53: "😁",
    52: "🙂",
    51: "😐",
    50: "☹️",
    49: "🤬",
}