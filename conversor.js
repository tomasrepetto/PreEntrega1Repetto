// Conversor de moneda

// Dolar
function dolar(valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

// Euro
function euro(valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

// Real
function real(valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

function conversor(){
    const valor1 = parseInt(prompt("Ingrese la cantidad de pesos a convertir:"));
    const operacion = prompt("Convertir a dolar/euro/real");

    switch(operacion){
        case "dolar":
            alert("Equivale a " + parseInt(dolar(valor1, 730)) + " dolares.");
            break;
        case "euro":
            alert("Equivale a " + parseInt(euro(valor1, 790)) + " euros.");
            break;
        case "real":
            alert("Equivale a " + parseInt(real(valor1, 100)) + " reales.");
            break;
        default:
            alert("La operacion ingresada no es valida.")
    }
}