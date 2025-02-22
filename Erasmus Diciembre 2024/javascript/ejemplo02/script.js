
// Esta función crea un nuevo párrafo
function createParagraph() {
    let para = document.createElement("p");
    para.textContent = "Has hecho click en el botón";
    document.body.appendChild(para);
}

/* Obtenemos el o los elementos buttons y los guardamos en 
una constante */

const buttons = document.querySelectorAll("button");

/* Esto es un bucle que recorre todos los elementos de la
constante buttons */

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", createParagraph);
}

//Esto es un comentario de una línea

/* Comentarios
de
varias líneas */