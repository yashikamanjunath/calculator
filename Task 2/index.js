function Solve(val) {
    const inputField = document.getElementById('res');
    inputField.value += val;
}

function Result() {
    const expression = document.getElementById('res').value;
    try {
        // Replace 'x' with '*' for multiplication
        const sanitizedExpression = expression.replace(/x/g, '*');
        // Use Function constructor for safer evaluation
        const result = Function('"use strict"; return (' + sanitizedExpression + ')')();
        document.getElementById('res').value = result;
    } catch (error) {
        document.getElementById('res').value = 'Error';
    }
}

function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    const inputField = document.getElementById('res');
    inputField.value = inputField.value.slice(0, -1);
}

// Add event listener for keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';

    if (validKeys.includes(key)) {
        // Use 'x' for multiplication symbol on the interface
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});
