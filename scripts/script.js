const calcularImc = () => {
    let altura = document.imcForm.elements["altura"].value;

    let peso = document.imcForm.elements["peso"].value;

    peso = (peso.replace(',', '.'));
    altura = (altura.replace(',', '.'));

    if (!altura.includes('.')) {
        altura = +altura / 100
    }
    
    let resultado = 'undefined';

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        resultado = ("você está abaixo do peso!");
    }
    if (imc >= 18.5 && imc < 25) {
        resultado = ("você está com o peso normal!");
    }
    if (imc >= 25 && imc < 30) {
        resultado = ("você está com sobrepeso!");
    }
    if (imc >= 30 && imc < 35) {
        resultado = ("você está com obesidade de grau 1!");
    }
    if (imc >= 35 && imc < 40) {
        resultado = ("você está com obesidade de grau 2!");
    }
    if (imc >= 40) {
        resultado = ("você está com obesidade de grau 3!");
    }

    imc = imc.toFixed(2);

    document.getElementById('resultado').innerHTML = 'SEU IMC É DE: ' + imc + ' e ' + resultado;

    document.getElementById('calcular').scrollIntoView({
        behavior: 'smooth'
    });
}


