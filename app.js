// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
let cantidad = 5; // máximo permitido

function asignarTexto(elemento, listaDeAmigos) {
    let lista = document.querySelector(elemento);
    lista.className = "list-group list-group-numbered";

    // No mostrar nada si no hay amigos
    if (listaDeAmigos.length === 0) {
        lista.innerHTML = "";
        return;
    }

    // Construir lista enumerada con Bootstrap
    lista.innerHTML = listaDeAmigos
        .map(amigo => `<li class="list-group-item">${amigo}</li>`)
        .join('');
}

function agregarAmigo() {
    let input = document.getElementById('nombre-amigo');
    let amigo = input.value.trim();

    // Validación
    if (amigo === "") {
        alert("Por favor, completar el campo");
        return;
    }

    
    // Agregar si no se superó el límite
    if (amigos.length < cantidad) {
        if(amigos.includes(amigo)) {
            alert("Este nombre ya está registrado");
        }else {
        amigos.push(amigo);
        asignarTexto('#listaAmigos', amigos);
        input.value = ""; // limpiar campo
        input.focus();
        }    // volver a enfocar
    }

    

    // Desactivar botón si se llegó al límite
    if (amigos.length >= cantidad) {
        document.getElementById('boton').disabled = true;
    }
    console.log(amigos)
    if(amigos.length >= cantidad) {
    console.log("Llegaste al limite");
    }
}

function sortearAmigo() {

    let lista = document.querySelectorAll('#listaAmigos li');

    let amigos = Array.from(lista).map(li => li.textContent);
    let texto = document.getElementById('resultado');
    let listaAmigos = document.getElementById('listaAmigos');
    

    if(amigos != "") {
       let indice = Math.floor(Math.random() * amigos.length);
       
        console.log(`El amigo secreto es ${amigos[indice]}`);
      
        texto.innerHTML = `El amigo secreto es ${amigos[indice]}`;
        listaAmigos.style.display = "none";
        document.getElementById('sorteo-amigo').setAttribute('disabled','true');
    }

    
    
}




agregarAmigo();
sortearAmigo();  



  

 