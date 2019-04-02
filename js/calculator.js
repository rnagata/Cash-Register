var calculator = function(){

    var firstVal = 0;
    var secVal; // = undefined;
    var op = "none";
    var calcValue; // = undefined;

    var enterNum = function(num){
        if (op === "none"){
            firstVal = num;
        } else {
            secVal = num;
        }
    }
    var enterMulti = function(){
        if (op !== "none"){
            if (secVal !== undefined){
                firstVal *= secVal;
                secVal = undefined;
            }
        }
        op = "multiply";
    }
    var enterDiv = function(){
        if (op !== "none"){
            if (secVal !== undefined){
                firstVal /= secVal;
                secVal = undefined;
            }
        }
        op = "divide";
    }
    var enterAdd = function(){
        if (op !== "none"){
            if (secVal !== undefined){
                firstVal += secVal;
                secVal = undefined;
            }
        }
        op = "add";
    }
    var enterSub = function(){
        if (op !== "none"){
            if (secVal !== undefined){
                firstVal -= secVal;
                secVal = undefined;
            }
        }
        op = "subtract";
    }
    var calculate = function(){
        if (secVal === undefined){
            return;
        }

        firstVal = parseFloat(firstVal);
        secVal = parseFloat(secVal);

        if (op === "multiply"){
            calcValue = (firstVal * secVal).toFixed(2); 
        } else if (op === "divide"){
            calcValue = (firstVal / secVal).toFixed(2);
        } else if (op === "add"){
            //console.log("firstVal: " + firstVal);
            //console.log("secVal: " + secVal);
            calcValue = (firstVal + secVal).toFixed(2);
        } else if (op === "subtract"){
            calcValue = (firstVal - secVal).toFixed(2);
        } else {
            calcValue = firstVal.toFixed(2);
        }
        console.log("calcVal: " + calcValue);
        firstVal = calcValue;
        secVal = undefined;
        op = "none";
        return calcValue;
    }
    var clear = function(){
        firstVal = 0;
        secVal = undefined;
        op = "none";
        calcValue = undefined;
    }

    return {
        enterNum : enterNum,
        enterMulti : enterMulti,
        enterDiv : enterDiv,
        enterAdd : enterAdd,
        enterSub : enterSub,
        calculate : calculate,
        clear : clear,
    }
}()


calculator.calculate() // log 0
calculator.enterNum(8); 
calculator.calculate(); // log 8
calculator.clear();

calculator.enterNum(8);
calculator.enterMulti();
calculator.enterNum(2);
calculator.calculate(); // log 16. 
calculator.clear();

calculator.enterMulti();
calculator.calculate(); // log 0
calculator.clear();

calculator.enterNum(46);
calculator.enterMulti();
calculator.calculate(); // log 46;
calculator.clear();

calculator.enterNum(8);
calculator.enterMulti(); 
calculator.enterNum(3); 
calculator.enterMulti();
calculator.enterMulti();
calculator.enterNum(2);
calculator.calculate(); // log 48
calculator.clear();

calculator.enterNum(6); 
calculator.enterMulti();
calculator.enterMulti();
calculator.enterNum(6);
calculator.calculate(); // log 36 
calculator.enterMulti();
calculator.enterNum(2);
calculator.calculate(); // log 72.
calculator.clear();

calculator.enterNum(10);
calculator.enterDiv();
calculator.enterDiv();
calculator.enterNum(2);
calculator.calculate(); // log 5
calculator.enterMulti();
calculator.enterNum(3);
calculator.calculate(); // log 15
calculator.enterDiv();
calculator.enterNum(15);
calculator.calculate(); // log 1
calculator.enterAdd();
calculator.enterAdd();
calculator.enterNum(45); 
calculator.calculate(); //log 46
calculator.clear();

calculator.enterNum(5);
calculator.enterSub();
calculator.enterNum(1);
calculator.calculate(); // log 4
calculator.enterNum(5);
calculator.enterSub();
calculator.enterSub();
calculator.enterNum(4);
calculator.calculate(); // log 1

calculator.enterNum(5);
calculator.enterDiv();
calculator.enterNum(3);
calculator.calculate();
