// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigos = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let arrayAmigos = [];

//declaramos las funciones para agregar y sortear amigos
function agregarAmigo() {
	if(inputAmigos.value == ""){
		alert("No se pueden incluir registros vacios")
		inputAmigos.value = "";
		inputAmigos.focus();
		return null
	}
	let nuevoAmigo = document.createElement("p");
	nuevoAmigo.textContent = inputAmigos.value;
	arrayAmigos.push(inputAmigos.value);
	listaAmigos.appendChild(nuevoAmigo);
	inputAmigos.value = "";
}

function sortearAmigo() {
	// se genera un número aleatorio para elegir un amigo al azar por su indice
	let numeroAleatorio = Math.floor(Math.random()*arrayAmigos.length);
	resultado.textContent = arrayAmigos[numeroAleatorio];
	console.log(numeroAleatorio);
}
