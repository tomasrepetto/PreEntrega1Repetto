// Conversor de moneda

// Pesos
function pesos2(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}

// Dolar
function dolar(valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

function dolar2(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}

// Euro
function euro(valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

function euro2(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}

// Real
function real(valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

function real2(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}


function conversor(){
    const operacion1 = prompt("Que moneda desea convertir? pesos/dolares/euros/reales");
    const valor1 = parseInt(prompt("Ingrese la cantidad de " + operacion1 + " a convertir:"));
    const operacion2 = prompt("Convertir a pesos/dolares/euros/reales");

    switch(operacion1){
        case "pesos":
            if (operacion2 == "dolares"){
                alert("Equivale a " + (dolar(valor1, 725).toFixed(2)) + " dolares.")
            } else if(operacion2 == "euros"){
                alert("Equivale a " + (euro(valor1, 793).toFixed(2)) + " euros.");
            } else if(operacion2 == "reales"){
                alert("Equivale a " + (real(valor1, 100).toFixed(2)) + " reales.");
            } else{
                alert("Equivale a " + parseInt(valor1) + " pesos.");
            }
        break;
        case "dolares":
            if (operacion2 == "pesos"){
                alert("Equivale a " + (pesos2(valor1, 725).toFixed(2)) + " pesos.")
            } else if(operacion2 == "euros"){
                alert("Equivale a " + (euro2(valor1, 0.93).toFixed(2)) + " euros.");
            } else if(operacion2 == "reales"){
                alert("Equivale a " + (real2(valor1, 4.97).toFixed(2)) + " reales.");
            } else{
                alert("Equivale a " + parseInt(valor1) + " dolares.");
            }
        break;
        case "euros":
            if (operacion2 == "pesos"){
                alert("Equivale a " + (pesos2(valor1, 793).toFixed(2)) + " pesos.")
            } else if(operacion2 == "dolares"){
                alert("Equivale a " + (dolar2(valor1, 1.07).toFixed(2)) + " dolares.");
            } else if(operacion2 == "reales"){
                alert("Equivale a " + (real2(valor1, 5.33).toFixed(2)) + " reales.");
            } else{
                alert("Equivale a " + parseInt(valor1) + " euros.");
            }
        break;
        case "reales":
            if (operacion2 == "pesos"){
                alert("Equivale a " + (pesos2(valor1, 70.36).toFixed(2)) + " pesos.")
            } else if(operacion2 == "dolares"){
                alert("Equivale a " + (dolar2(valor1, 0.20).toFixed(2)) + " dolares.");
            } else if(operacion2 == "euros"){
                alert("Equivale a " + (euro2(valor1, 0.19).toFixed(2)) + " euros.");
            } else{
                alert("Equivale a " + parseInt(valor1) + " reales.");
            }
        break;
        default:
            alert("La operacion ingresada no es valida.")
    }
}