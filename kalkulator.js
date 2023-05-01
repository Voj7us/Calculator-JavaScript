const courrentNumber = document.querySelector(".courrentNumber");
const previousNumber = document.querySelector(".previousNumber p");
const sign = document.querySelector(".sign");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear-btn");

let result = '';

function displayNumbers(){
if(this.textContent === '.' && courrentNumber.innerHTML.includes('.')) return; // blokada na dodawanie miliona kropek
if(this.textContent === '.' && courrentNumber.innerHTML === '') return courrentNumber.innerHTML ='.0' // jeżeli klikasz kropkę dostawia zero
courrentNumber.innerHTML += this.textContent; // wyświetlanie klikniętego przycisku
}


function operate(){
if(courrentNumber.innerHTML === '' && this.textContent === '-'){
    courrentNumber.innerHTML = '-';
    return;     // tworzenie ujemnej liczby
}   
else if (courrentNumber.innerHTML === ''){
    return;
}

if(sign.innerHTML !== ''){
    showResult(); 
}
previousNumber.innerHTML = courrentNumber.innerHTML;
sign.innerHTML = this.textContent;
courrentNumber.innerHTML = '';
}
// wkonywanie działania
function showResult(){
if(previousNumber.innerHTML === '' || courrentNumber.innerHTML === '') return;
let a = parseFloat(courrentNumber.innerHTML);
let b = parseFloat(previousNumber.innerHTML);
let operator = sign.innerHTML;

switch(operator){
    case '+':
    result = a + b;
    break;
    case '-':
    result = b - a;
    break;
    case '*':
    result = a * b;
    break;
     case '/':
    result = b / a;
 break;
 case '^2':
    result = b ** a;
 break;
}

courrentNumber.innerHTML = result;
previousNumber.innerHTML = '';
sign.innerHTML = '';
}

//czyszczenie kalkilatora
function clearScreen(){
result = '';
courrentNumber.innerHTML = '';
previousNumber.innerHTML = '';
sign.innerHTML = '';  
}

//Nasłuchwianie przycisków

operator.forEach((button) => button.addEventListener('click', operate));

equals.addEventListener('click', showResult);

clear.addEventListener('click', clearScreen);

number.forEach((button) => {button.addEventListener('click', displayNumbers)});

