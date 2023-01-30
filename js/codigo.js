

Inicio(); // Ejecutamos la funcion Inicio
/// probando cambios en git 2

function Inicio(){

    MostrarInicio();
    Eventos();
}

function Eventos(){

    dqs("btnInicio").addEventListener("click", MostrarInicio);
    dqs("btnIngreso").addEventListener("click", MostrarLogin);
    dqs("btnRegistro").addEventListener("click", MostrarRegistro);
}


function OcultarTodo(){

    dqs("inicio").style.display = "none";
    dqs("registro").style.display = "none";
    dqs("login").style.display = "none";
    // ocultamos a inicio

}

function MostrarInicio(){
    OcultarTodo();
    dqs("inicio").style.display = "block";

    if(usuarioLogueado){

        dqs("divUsuarioDeslogueado").style.display = "none";
        dqs("divUsuarioLogueado").style.display = "block";
    } else {

        dqs("divUsuarioDeslogueado").style.display = "block";
        dqs("divUsuarioLogueado").style.display = "none";

    }

}
function MostrarRegistro(){
    OcultarTodo();
    dqs("registro").style.display = "block";

}
function MostrarLogin(){
    OcultarTodo();
    dqs("login").style.display = "block";

}

function Precarga(){

    let p1 = new Pais("Argentina", "ARG");
    let p2 = new Pais("Brasil", "BRA");
    let p3 = new Pais("Uruguay", "UYU");

    Paises.push(p1,p2,p3);

    let u1 = new Usuario("Juan", "Perez", p3, "jperez", "1234");
    Usuarios.push(u1);

}

// Funciones auxiliares

function dqs(id){

    return document.querySelector("#"+id);

}

