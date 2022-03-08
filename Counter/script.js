//Elements
const counterDisplayElement = document.getElementById("number");
const counterPlusElement = document.querySelector(".number-up");
const counterMinusElement = document.querySelector(".number-down");
const counterReset = document.querySelector(".number-reset");

let count = Math.floor(Math.random() * 80);

//Functions
updateDisplay();

function updateDisplay() {
    counterDisplayElement.innerHTML = count;
}

//Event Listeners
counterPlusElement.addEventListener('click', () => {
    count++;
    updateDisplay();
});
counterMinusElement.addEventListener('click', () => {
    count--;
    updateDisplay();
});
counterReset.addEventListener('click', () => {
    count = Math.floor(Math.random() * 80);
    updateDisplay();
});