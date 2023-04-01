// Guía de ejercicios
// 1. Crea un array que contenga el nombre de cinco colores escritos como strings.
// let colores = ["rojo", "blanco", "negro", "naranja", "gris"];
// 2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
// let color = colores[2];
// 3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
// ejercicio 1.

// console.log(colores[0][0]);
// 4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
// función Math.random().

// console.log(Math.floor(Math.random() * 99));

// 5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.

// const crearArray = () => {
//   let arr = [];
//   for (let i = 1; i <= 10; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// let arr = crearArray();
// console.table(arr);

// 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.

// const arrAleatorio = (n) => {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(Math.floor(Math.random() * 10));
//   }
//   return arr;
// };

// let arr2 = arrAleatorio(10);

// console.table(arr2);

// 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
// consola.

// let copia = arr2.slice();

// console.table(copia);

// 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
// medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
// luego recorriendolo para mostrar el resultado deseado del ejercicio.

// const pedirTexto = () => {
//   let texto = prompt("ingrese texto");
//   let arr = [];
//   arr.push(texto);
//   let cadena = " ";
//   cadena = cadena + texto;
//   do {
//     texto = prompt("ingrese texto");
//     if (texto != "cancelar") {
//       cadena = cadena + "-" + texto;
//       arr.push(texto);
//     }
//   } while (texto !== "cancelar");

//   alert(cadena);
// };

// pedirTexto();

// 9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
// convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
// Mostrar el resultado elemento de html.

// function convertirDolares() {
//   let dolares = document.querySelector("#dolares").value;
//   let pesos = document.querySelector("#pesos");
//   let valor = dolares * 300;
//   pesos.value = valor;
// }

// 10. Generar la inversa del ejercicio anterior (de pesos a dólares).

// function convertirPesos() {
//   let pesos = document.querySelector("#pesos").value;
//   let dolares = document.querySelector("#dolares");
//   let valor = pesos / 300;
//   dolares.value = valor;
// }
// 11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
// ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
// son 86 grados fahrenheit.

// function convertirFahrenheit() {
//   let centígrados = document.querySelector("#centigrados").value;
//   let fahrenheit = document.querySelector("#fahrenheit");
//   let valor = centígrados * (9 / 5) + 32;
//   fahrenheit.value = valor;
// }

//13
//A traves de un formulario, el usuario debe introducir  un numero secreto entre 0 y 5
//El usuario tendra 3 intentos para acertar el numero si no lo logra, habra perdido.
//debemos indicar en texto si el usuario gana o pierde

// const form = document.getElementById("form2");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

// const adivina = () => {
//   const numero = document.querySelector("#numero").value;
//   const random = Math.floor(Math.random() * 5);
//   const resultado = numero == random;
//   if (resultado) {
//     alert(`ganaste el numero era ${random}`);
//   } else {
//     alert(`Perdiste el numero era ${random}`);
//   }
// };

// 14. Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista

const agregarPersona = () => {
  const lista = document.querySelector(".lista");
  let item = document.createElement("LI");
  const inputNombre = document.getElementById("inputNombre").value;
  item.innerText = inputNombre;
  lista.appendChild(item);
};
