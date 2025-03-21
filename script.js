function print(msg) {
    console.log(msg)
}

const display = document.getElementById("result")

function brotarNoDisplay(input) {
    display.value += input;
}

function calcular() {
    try {     
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Erro"
    }
}

function apagar() {
    display.value = ""
}
