let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 9);
let answer = num1 * num2;

let body = document.body;
let word = document.createElement('div');
word.textContent = String(num1) + ' multiplied by ' + String(num2) + ' is?';
document.body.append(word);

let form = document.createElement('form');
document.body.append(form);
let inputBox = document.createElement('input');
inputBox.type = 'number';
form.append(inputBox);
let submitButton = document.createElement('button');
submitButton.textContent = 'SUBMIT';
form.append(submitButton);
let result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit', function callback(event) {
    event.preventDefault();
    if (answer === Number(inputBox.value)) {
        result.textContent = 'Correct!';
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        answer = num1 * num2;
        word.textContent = String(num1) + ' multiplied by ' + String(num2) + ' is?';
        inputBox.value = '';
        inputBox.focus();
    } else {
        result.textContent = 'Incorrect!';
        inputBox.value = '';
        inputBox.focus();
    }
});