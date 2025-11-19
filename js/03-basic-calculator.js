// ADD A FUNCTION CALLED CALCULATE

const calculate = (x, y, operation) => {

    switch (operation) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
    }
}

let x, y , operation
let operationFlag = 0;

// COLLECT FIRST NUMBER FROM USER
x = parseInt(window.prompt('Please provide the first number: '))

// COLLECT SECOND NUMBER FROM USER
y = parseInt(window.prompt('Please provide the second number: '))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
do {
    operation = window.prompt('Please choose an operation from the following [+, -, *, /]: ')
    if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        window.alert('Please pick one appropriate operation from those listed!');
    } else {
        operationFlag = -1;
    }

} while (operationFlag != -1)
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
window.alert('Result: ' + calculate(x, y, operation));

