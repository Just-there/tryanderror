const lengthEl = document.getElementById('length');
const includeUppercaseEl = document.getElementById('include-uppercase');
const includeNumbersEl = document.getElementById('include-numbers');
const includeSymbolsEl = document.getElementById('include-symbols');
const generateBtn = document.getElementById('generate-btn');
const passwordDisplay = document.getElementById('password-display');

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
);

generateBtn.addEventListener('click', () => {
    const length = lengthEl.value;
    const includeUppercase = includeUppercaseEl.checked;
    const includeNumbers = includeNumbersEl.checked;
    const includeSymbols = includeSymbolsEl.checked;
    const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
    passwordDisplay.textContent = password;
});

function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    
    const passwordCharacters = [];
    for (let i = 0; i < length; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}
