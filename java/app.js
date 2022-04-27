//CREACION DE ARRAY CON NUESTRO EBJETO DE PERSONAS
const personas = [
    
];


function mostrarPersonas(){
    console.log("Mostrar persona");
    let texto= "";
    for(let persona of personas){
        console.log(persona);
        texto +=`<li>Nombre:${persona.nombre} ${persona.apellido}./ Email ${persona.email}</li> `;
        
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre= forma["nombre"];
    const apellido= forma["apellido"];
    const email= forma["email"];

    if(nombre.value != "" && apellido.value != "" && email.value != ""){
    const persona = new Persona(nombre.value, apellido.value,email.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
    }
    else{
        console.log("No ingreso informacion nueva al formulario");
    }
}