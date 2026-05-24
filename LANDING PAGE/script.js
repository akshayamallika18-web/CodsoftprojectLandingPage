function addNumber(number) {
    document.getElementById("result").value += number;
}

function calculate() {
    let result = document.getElementById("result");

    result.value = eval(result.value);
}

function clearResult() {
    document.getElementById("result").value = "";
}