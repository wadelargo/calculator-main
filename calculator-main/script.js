const screen = document.querySelector('.screen');
let total = 0;
let result = '0';
let operator;
let option = '';

function click(value) {
    if (isNaN(value)) {
        symbol(value);
    } else {
        number(value);
    }
    screen.innerText = result;
}

function symbol(value) {
    switch (value) {
        case 'C':
            result = '0';
            total = 0;
            option = '';
            operator = false;
            break;
        case '+/-':
            if (!result.includes('-')) {
                result = '-' + result;
            }
            break;
        case '%':
            result /= 100;
            break;
        case '=':
            if (total != '0') {
                result = eval(total + option + result);
                total = '0';
                operator = true;
            }
            break;
        case '.':
            if (!result.includes(value)) {
                result += value;
            }
            break;
        case '+':
        case '-':
            math(option);
            option = value;
            break;
        case '×':
            math(option);
            option = '*';
            break;
        case '÷':
            math(option);
            option = '/';
            break;
    }
}

function math(value) {
    if (total != '0' & operator == false) {
        result = eval(total + value + result);
    }
    total = result;
    operator = true;
}

function number(value) {
    if (result == '0') {
        result = value;
    } else {
        if (operator == true) {
            result = "";
            operator = false;
        }
        result += value;
    }
}

function init() {
    document.querySelector('.buttons').addEventListener('click', (e) => {
        click(e.target.innerText);
    })
}

init();