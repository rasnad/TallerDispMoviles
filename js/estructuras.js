let usuarioLogueado = false;

let Usuarios = new Array();
let Paises = new Array();


class Usuario{
    constructor(nombre, apellido, pais, user, pass){
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Pais = pais;
        this.User = user;
        this.Pass = pass;
    }
}

class Pais{

    constructor(nombre, codigo){

        this.Nombre = nombre;
        this.Codigo = codigo;
    }

}