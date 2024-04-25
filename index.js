const display = document.getElementById('display');

        function numClick(number) {
            display.value += number;
        }

        function operationClick(input) {
            let currentValue = display.value;

            switch (input) {
                case '%':
                    currentValue = eval(currentValue) / 100;
                    break;
                case '/':
                case '*':
                case '-':
                case '+':
                    const lastChar = currentValue[currentValue.length - 1];
                    if (lastChar === '/' || lastChar === '*' || lastChar === '-' || lastChar === '+') {
                        currentValue = currentValue.slice(0, -1) + input;
                    } else {
                        currentValue += input;
                    }
                    break;
                default:
                    console.log('Unsupported operation:', input);
                    break;
            }

            display.value = currentValue;
        }

        function clearDisplay() {
            display.value = "";
        }

        function dotDisplay(dot) {
            display.value += dot;
        }

        function calculate() {
            try {
                let result = eval(display.value);
                if (result === Infinity || isNaN(result)) {
                    display.value = "Cannot divide by 0";
                } else {
                    display.value = result;
                }
            } catch (error) {
                display.value = "Error";
            }
        }

        function symbolDisplay(symbol) {
            if (symbol === '<') {
                let currentValue = display.value;
                if (currentValue.length > 0) {
                    display.value = currentValue.slice(0, -1);
                }
            } else {
                console.log('Unsupported symbol:', symbol);
            }
        }