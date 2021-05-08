if (!localStorage.getItem('pos-actual')) {
    localStorage.setItem('pos-actual', 1);
}

let posActual = localStorage.getItem('pos-actual');

function planeta1() {
    let titulo = document.querySelector('h2');
    titulo.textContent = 'Mercurio';
    let imagen = document.querySelector('img');
    imagen.setAttribute('src', 'images/mercurio.jpg');
    let parrafo = document.querySelector('p');
    parrafo.textContent = 'Mercurio es el planeta del sistema solar más próximo al Sol y el más pequeño.';
    localStorage.setItem('pos-actual', 1);
    posActual = 1;
}

function planeta2() {
    let titulo = document.querySelector('h2');
    titulo.textContent = 'Venus';
    let imagen = document.querySelector('img');
    imagen.setAttribute('src', 'images/venus.jpg');
    let parrafo = document.querySelector('p');
    parrafo.textContent = 'Venus es el segundo planeta del sistema solar en ' +
        'orden de distancia desde el Sol, el sexto en cuanto a tamaño, ordenados de mayor a menor.';
    localStorage.setItem('pos-actual', 2);
    posActual = 2;
}

if (posActual == 1) {
    planeta1();
}
else {
    planeta2();
}

document.querySelector('button').onclick = function () {
    if (posActual == 1) {
        planeta2();
    }
    else {
        planeta1();
    }
}

