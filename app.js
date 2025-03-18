let amigos = [];
const resultado = "";
let ul_lista = document.querySelector("ul");


function agregarAmigo(){

    let nombre_amigo =  document.getElementById("amigo").value;

    if(!nombre_amigo.toLowerCase()){
        
        alert("Por favor ingresar un nombre válido")
    }
    else if(amigos.includes(nombre_amigo)){
        alert("Aquel nombre ya fue ingresado");
    }
    else{

        amigos.push(nombre_amigo.toLowerCase());
        actualizarListaAmigos(nombre_amigo);
        document.getElementById("amigo").value = "";

    }

}

function actualizarListaAmigos(nombre_amigo) {

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(nombre_amigo));
    ul_lista.appendChild(li);
}

function sortearAmigo(){

    var numero_posicion = Math.floor(Math.random()*amigos.length);
    var nombre_capitalizado = capitalizarNombre(amigos[numero_posicion]);
    limpiarListaAmigos();
    document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + nombre_capitalizado;

}

function capitalizarNombre(nombre){

    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function limpiarListaAmigos(){

    ul_lista.innerHTML = '';

}