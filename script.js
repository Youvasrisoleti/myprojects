// For clearing all values
function clearScreen() {
    document.getElementById("result").value = "";
}

// for displaying the values
function display(value) {
    document.getElementById("result").value += value;
}

// for evaluating and returning the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}