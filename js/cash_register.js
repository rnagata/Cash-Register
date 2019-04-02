// HTML REFERENCES
var numButtonElems = document.getElementsByClassName('numButton');
var balance = 0.00;

// BUTTON EVENT DEFINITIONS
function enterNum(){
    if (display.textContent === '0'){
        display.textContent = this.textContent;
    } else {
        display.textContent += this.textContent;
    }
    calculator.enterNum(parseFloat(display.textContent));
}

function enterDivide(){
    calculator.enterDiv();
    display.textContent = '0';
}

function enterMultiply(){
    calculator.enterMulti();
    display.textContent = '0';
}

function enterSubtract(){
    calculator.enterSub();
    display.textContent = '0';
}

function enterAddition(){
    calculator.enterAdd();
    display.textContent = '0';
}

function enterCalculate(){
    display.textContent = calculator.calculate().toString();
}

function enterClear(){
    display.textContent = '0';
}

function Balance(){
    display.textContent = balance.toString();
}

function Deposit(){
    if (parseFloat(display.textContent) >= 0.00){
        balance += parseFloat(display.textContent);
    }
    display.textContent = '0';
}

function Withdraw(){
    if (parseFloat(display.textContent) <= balance){
        balance -= parseFloat(display.textContent);
    }
    display.textContent = '0';
}


// BUTTON EVENT ASSIGNMENT
for (var i = 0; i < numButtonElems.length; i++){
    numButtonElems[i].addEventListener('click', enterNum);
}
divide.addEventListener('click', enterDivide);
multiply.addEventListener('click', enterMultiply);
subtract.addEventListener('click', enterSubtract);
add.addEventListener('click', enterAddition);
total.addEventListener('click', enterCalculate);
clear.addEventListener('click', enterClear);
getBalance.addEventListener('click', Balance);
depositCash.addEventListener('click', Deposit);
withdrawCash.addEventListener('click', Withdraw);
