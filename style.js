function check() {
    let userInput = document.getElementById('inputValue').value;
    let result = document.getElementById('result');
    let message;

    if (userInput === '') {
        message = "Please enter a number.";
    } else {
        userInput = parseInt(userInput); 
        if (isNaN(userInput)) {
            message = "Invalid input. Please enter a valid number.";
        } else if (userInput % 2 === 0) {
            message = "It's an even number.";
        } else {
            message = "It's an odd number.";
        }
    }

    result.innerHTML = message;
}

function restart() {
    document.getElementById('inputValue').value = '';
    document.getElementById('result').innerHTML = '';
}
