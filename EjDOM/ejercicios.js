// Ejercicio 1

alert('Bienvenido a mi página web');

// Ejercicio 2

var nombre = prompt('Por favor, ingresa tu nombre:');
alert('Hola, ' + nombre + '!');

// Ejercicio 3

var num1 = parseInt(prompt('Introduce el primer número: '));
var num2 = parseInt(prompt('Introduce el segundo número: '));
var suma = num1 + num2;
alert('El resultado es ' + suma);

// Ejercicio 4

var edad = prompt('Introduce tu edad: ');

if (edad < 18) {
  alert('Eres menor de edad.');
} else {
  alert('Eres mayor de edad.');
}

// Ejercicio 5.1

var productos = document.getElementById('productos');
var span = productos.getElementsByClassName('precio');

var num = span.length;

var nuevoNodo = document.createElement('p');
nuevoNodo.textContent = 'Hay ' + num + ' con clase precio.';

document.getElementById('log').appendChild(nuevoNodo);

// Ejercicio 5.2

var p1 = document.getElementById('p1');

var text = document.createElement('p');
text.textContent = p1.textContent;
var inner = document.createElement('p');
inner.innerHTML=p1.innerHTML;

document.getElementById('log').appendChild(text);
document.getElementById('log').appendChild(inner);

// Ejercicio 5.3

var n2 = document.getElementById('n2');
n2.textContent = 'Reposición completada. ¡Gracias por vuestra paciencia!';


// Ejercicio 5.4

var productos = document.getElementById('productos');
var span = productos.getElementsByClassName('precio');

for(i = 0; i < span.length; i++){
  let precio = parseFloat(span[i].textContent)
  precio += 0.10;
  span[i].textContent = precio.toFixed(1);
}

// Ejercicio 5.5

var tila = document.createElement('li');
tila.innerHTML = 'Tila <span class="precio">2.2</span> €';

document.getElementById('lista').appendChild(tila);

// Ejercicio 5.6

var cambio = document.getElementById('p1');
cambio.innerHTML = 'Producto destacado <span class="precio">9.99</span> €';

// Ejercicio 5.7

var p = document.getElementById('n2');
p.parentNode.removeChild(p);

// Ejercicio 5.8

var alum = document.getElementsByName('alumnos');
for (let i = 0; i < alum.length; i++) {
  alum[i].setAttribute('checked', '');
  // alum[i].checked = true; (Otra opción)
}

// Ejercicio 5.9

var list = document.getElementById('lista');
var prod= list.getElementsByTagName('li');
var lista = prod.length;

var nuevoNodo = document.createElement('p');
nuevoNodo.textContent = 'Hay ' + lista + ' con clase precio.';
document.getElementById('log').appendChild(nuevoNodo);