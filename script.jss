document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.innerText = '';
            } else if (value === '=') {
                if (currentInput !== '' && previousInput !== '') {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.innerText = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (this.classList.contains('operator')) {
                if (currentInput !== '') {
                    if (previousInput === '') {
                        previousInput = currentInput;
                        currentInput = '';
                    }
                    operator = value;
                }
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(a, b, operator) {
        let result;
        a = parseFloat(a);
        b = parseFloat(b);

        switch(operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }

        return result.toString();
    }
});
s
