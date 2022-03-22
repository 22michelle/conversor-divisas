let boton = document.getElementById("convertir");
let cantidad = document.getElementById("cantidad");
let tipoMoneda = ["Dolar", "Peso Mexicano", "Peso Colombiano", "Euro", "Libra Esterlina", "Yen Japones"];
let fieldeset = document.getElementById('field')
let resultado = document.getElementById('resultado')
let equivalencia = document.getElementById('XD')
let conversion = document.getElementById('conversion')
let fragment = document.createDocumentFragment();
//Cortesía de "https://es.stackoverflow.com/questions/69836/cargar-un-array-en-select-javascript" para poder guiarme ⬇

MyOnLoad()

function MyOnLoad() {
    cargarMonedaUno(tipoMoneda)
    cargarMonedaDos(tipoMoneda)
}

function cargarMonedaUno(moneditaDeUno) {
    moneditaDeUno.sort();
    addOptions("monedaUno", moneditaDeUno);
}

function cargarMonedaDos(moneditaDeDos) {

    moneditaDeDos.sort();
    addOptions("monedaDos", moneditaDeDos);
}

function addOptions(mod, moneditas) {
    const moneda = document.getElementById(mod);
    moneditas.forEach((monedita, index) => {
        let option = document.createElement('option');
        option.textContent = monedita;
        option.setAttribute('value', index+1);
        fragment.appendChild(option);
    });
    moneda.appendChild(fragment)
}

//Hasta Acá ⬆
mostrar = function () {
    fieldeset.style = "display:block;"
}
ocultar = function () {
    fieldeset.style = "display:none;"
}
ocultar()

function calculo(input, modUno, modDos) {
    let monedaUno = document.getElementById(modUno);
    let monedaDos = document.getElementById(modDos);
    if (input > 0 && monedaUno.value !== "0" && monedaDos.value !== "0") {
        switch (monedaUno.value) {
            case "1":
                switch (monedaDos.value) {
                    case "1":
                        alert("Elije otra moneda")
                        monedaDos.value = "0"
                        console.log(monedaDos);
                        ocultar()
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.88).toFixed(2)}€`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `0.88 Euros`
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.74).toFixed(2)}£`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `0.74 Libras Esterlina`
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `${(input * 4050.04).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `4,050.04 Peso Colombiano`
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 20.38).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `20.38 Peso Mexicano`
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 115.46).toFixed(2)}¥`;
                        equivalencia.innerHTML = `1 Dólar equivale a:`
                        conversion.innerHTML = `115.46 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "2":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 1.13).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `1.13 Dólar Estadounidense`
                        break;
                    case "2":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.83).toFixed(2)}£`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `0.83 Libra Esterlina`
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `${(input * 4589.06).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `4,589.06 Peso Colombiano`
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 23.08).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `23.08 Peso Mexicano`
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 130.83).toFixed(2)}¥`;
                        equivalencia.innerHTML = `1 Euro equivale a:`
                        conversion.innerHTML = `130.83 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "3":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 1.36).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `1.36 Dólar Estadounidense`
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 1.20).toFixed(2)}€`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `1.13 Euro`
                        break;
                    case "3":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `${(input * 5506.46).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `5,506.46 Peso Colombiano`
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 27.69).toFixed(2)}$`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `27.69 Peso Mexicano`
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 156.90).toFixed(2)}¥`;
                        equivalencia.innerHTML = `1 Libra Esterlina equivale a:`
                        conversion.innerHTML = `156.90 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "4":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00025).toFixed(2)}$`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `0.25 Dólar Estadounidense`
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00022).toFixed(2)}€`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `0.22 Euro`
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00018).toFixed(2)}£`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `0.18 Libra Esterlina`
                        break;
                    case "4":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00025).toFixed(2)}$`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `0.25 Peso Mexicano`
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.029).toFixed(2)}¥`;
                        equivalencia.innerHTML = `1,000 Peso Colombiano equivale a:`
                        conversion.innerHTML = `28.52 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "5":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.049).toFixed(2)}$`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `0.49 Dólar Estadounidense`
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.043).toFixed(2)}€`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `0.43 Euro`
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.036).toFixed(2)}£`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `0.36 Libra Esterlina`
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `${(input * 198.87).toFixed(2)}$`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `1,998.70 Peso Colombiano`
                        break;
                    case "5":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 5.67).toFixed(2)}¥`;
                        equivalencia.innerHTML = `10 Peso Mexicano equivale a:`
                        conversion.innerHTML = `56.65 Yen Japonés`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "6":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.0087).toFixed(2)}$`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `0.87 Dólar Estadounidense`
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.0076).toFixed(2)}€`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `0.76 Euro`
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.0064).toFixed(2)}£`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `0.64 Libra Esterlina`
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `${(input * 35.09).toFixed(2)}$`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `3,509.06 Peso Colombiano`
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.18).toFixed(2)}$`;
                        equivalencia.innerHTML = `100 Yen Japonés equivale a:`
                        conversion.innerHTML = `17.65 Peso Mexicano`
                        break;
                    case "6":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            default:
                alert("Ha ocurrido un error");
                break;
        }
    }
    else {
        alert("Ingresa valores correctos")
        ocultar()
    }
}

boton.addEventListener('click', function () {
    calculo(cantidad.value, 'monedaUno', 'monedaDos');
})