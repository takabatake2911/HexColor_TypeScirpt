"use strict";
const CHAR_LIST = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];
const getRandomChar = () => {
    const _random_index = Math.floor(Math.random() * CHAR_LIST.length);
    return CHAR_LIST[_random_index];
};
const getRandomColorCode = () => {
    let _code = "#";
    for (let i = 0; i < 6; i++) {
        _code += getRandomChar();
    }
    return _code;
};
const $btn = document.getElementById("btn");
const $color_text = document.querySelector(".color-text");
const $root = document.querySelector(":root");
$btn.addEventListener("click", () => {
    const _code = getRandomColorCode();
    $color_text.textContent = `Code: ${_code}`;
    $root.style.backgroundColor = _code;
});
