var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (var contador = 0; contador < pacientes.length; contador++) {
    var paciente = pacientes[contador];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = parseFloat(tdPeso.textContent);

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = parseFloat(tdAltura.textContent);

    var tdIMC = paciente.querySelector(".info-imc");

    if (peso > 0 && altura > 0) {
        var imc = (peso / (altura * altura)).toFixed(2);
        tdIMC.textContent = imc;
    } else {
        tdIMC.textContent = "Altura ou peso inválidos";
    }
}
