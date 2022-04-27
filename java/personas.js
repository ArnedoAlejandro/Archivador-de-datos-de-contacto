
//CREACION DE LA CLASE PERSONAS

class Persona{
    constructor(nombre,apellido,email){
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
    }
    //METODOS GET Y SET 
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    set apellido(apellido){
        return this._apellido = apellido;
    }
    get email(){
        return this._email
    }
    set email(email){
        return this._email = email;
    }


}