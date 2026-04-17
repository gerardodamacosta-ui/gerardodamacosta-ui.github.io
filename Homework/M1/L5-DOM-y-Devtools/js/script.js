const botonCambiar = document.getElementById("cambiarBtn");
const parrafo = document.getElementById("parrafo");

botonCambiar.addEventListener("click", () => {
	console.log("Boton clickeado correctamente");

	parrafo.textContent = "¡Nuevo texto generado!";

	const rojo = Math.floor(Math.random() * 256);
	const verde = Math.floor(Math.random() * 256);
	const azul = Math.floor(Math.random() * 256);

	parrafo.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
});
