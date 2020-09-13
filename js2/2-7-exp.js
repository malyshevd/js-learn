'use strict'

/**
* Функция арифмитического приведения пары чисел
* @param {number} a
* @param {number} b
* @param {string} operation в виде (+, -, /, *)
* @returns {number} 
*/
function mathOperation(a, b, operation) {
    switch(operation) {
        case "+":
            return addition(a, b);
        case "-":
            return subtraction(a, b);
        case "/":
            return division(a,b);
        case "*":
            return multiplication(a,b);
    }
}