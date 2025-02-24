//Proyecto ejecutdao por : Diego Fernando Amézquita Millán
//Conctacto : diegof.amezquita@gmail.com

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


/* Crea una lista vacía para almacenar los nombres de tus amigos */

let amigos = [];

/*Esta función agrega un amigo a la lista de amigos*/
function agregarAmigo() {
    
    let amigo_added = document.getElementById("amigo").value; /*Obtiene el nombre del amigo ingresado por el usuario*/

    if(amigo_added != "") {
        amigos.push(amigo_added); /*Agrega el amigo a la lista de amigos*/
        document.getElementById("amigo").value = ""; /*Limpia el campo de entrada de texto para que el usuario pueda ingresar otro amigo*/
        console.log(amigos);/*Imprime la lista de amigos en la consola*/
    }

    else {
        alert("Por favor, ingresa un nombre de amigo válido."); 
        /*Muestra un mensaje de alerta al usuario indicando que debe ingresar un nombre de amigo*/
    }

    listarAmigos();
}

function listarAmigos() {

    const lista = document.getElementById("listaAmigos"); /*Obtiene la lista de amigos*/

    lista.innerHTML = ""; /*Limpia la lista de amigos*/

    for (let i = 0; i < amigos.length; i++) {

        const NuevoElemento = document.createElement("li"); /*Crea un nuevo elemento de lista*/
        NuevoElemento.textContent = amigos[i]; /*Asigna el nombre de amigo al nuevo elemento de lista*/
        lista.appendChild(NuevoElemento); /*Agrega el nuevo elemento de lista a la lista de amigos*/
    }

}

function sortearAmigo() {

    var amigoSecreto= "";       /*Declara una variable para almacenar el amigo secreto*/
    resultado.innerHTML = "";   /*Limpia el elemento de resultado*/

    if(amigos.length == 0) {

        alert("Por favor, agregue amigos antes de sortear."); /*Muestra un mensaje de alerta al usuario indicando que debe agregar amigos antes de sortear*/
    }

    else {

        amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)]; /*Selecciona un amigo aleatorio de la lista de amigos*/
        const resultado = document.getElementById("resultado"); /*Obtiene el elemento de resultado*/
        console.log(amigoSecreto); /*Imprime el amigo secreto en la consola*/

        const NuevoElemento = document.createElement("li"); /*Crea un nuevo elemento de lista*/
        NuevoElemento.textContent = "el Amigo Secreto es: " + amigoSecreto; /*Asigna el nombre del amigo secreto al nuevo elemento de lista*/
        resultado.appendChild(NuevoElemento); /*Agrega el nuevo elemento de lista al elemento de resultado*/
    }

    }
