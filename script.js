const changeColorBtn = document.querySelector("#changeColorBtn");
const texten = document.querySelector("h1");
let isTrue = true;

function changeText(text, textClr, btnClr) {
    texten.innerHTML = text;
    texten.style.color = textClr;
    changeColorBtn.style.color = btnClr;
};

changeColorBtn.addEventListener("click", () => {
    if (isTrue) {
        changeText("Goodbye World", "red", "blue");
        isTrue = false;
    } else {
        changeText("Hello World", "blue", "red");
        isTrue = true;
    };
});