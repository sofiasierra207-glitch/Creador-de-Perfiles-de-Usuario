// Ayuda a recopilar las constantes y tipos de variables
const nombre = prompt("Ingresa tu nombre completo porfavor:"); //Se usa const porque el nombre de la persona no se puede cambiar 

// Se usa let porque la edad si puede cambiar
let edad = prompt("Ingresa tu edad:");

const ocupacion = prompt("Ingresa tu ocupacion:");

let edadConfirmada = prompt("Ingresa de nuevo tu edad porfavor:");

// Posible cambio de edad
edad = edadConfirmada;
console.log("Tipo antes de convertir:", typeof edad); // string

// Convertir texto a numero
edad = parseInt(edad);
console.log("Tipo despues de convertir:", typeof edad); // number

// Validar la edad de la persona
if (isNaN(edad) || edad <= 0) {
    alert("La edad no es un numero valido.");
    throw new Error("Edad invalida."); // Detiene el programa
} else if (edad < 18) {
    alert("Debes ser mayor de edad.");
    throw new Error("Usuario menor de edad."); // Detiene el programa
} else {
    console.log("Edad valida.");
}

//funcion para mostrar el perfil creado

function crearPerfil(nombre, edad, ocupacion) {
    // compara valor y tipo
    if (nombre === null || nombre.trim() === "") {
        return "Error: el nombre esta vacio.";
    }
    // linea de retorno con el string
    return `Hola, ${nombre}. Tienes ${edad} años y eres un/a ${ocupacion}.`;
}

const mensaje = crearPerfil(nombre, edad, ocupacion);
console.log(mensaje);

//Constante que guarda los arrays 
const hobbies = [];

// Ciclo que pide y recorre los hobbies
for (let i = 0; i < 3; i++) {
    const hobby = prompt(`Ingresa tu hobby ${i + 1}:`);
    if (hobby !== null && hobby.trim() !== "") {
        hobbies.push(hobby); // agrega al array
    }
}

// Mostrar cada hobby
hobbies.forEach((hobby, i) => {
    console.log(`${i + 1}. ${hobby}`);
});

// Objeto con todos los datos
const perfilUsuario = {
    nombre: nombre,
    edad: edad,
    ocupacion: ocupacion,
    hobbies: hobbies
};

// Seleccionar el div
const contenedor = document.getElementById("perfil-container");

// Convertir hobbies en un listado
let listaHobbies = "";
for (const hobby of perfilUsuario.hobbies) {
    listaHobbies += `<li>${hobby}</li>`;
}

// Mostrar el perfil en la página con innerHTML y template literal
contenedor.innerHTML = `
  <h2>${perfilUsuario.nombre}</h2>
  <p>${mensaje}</p>
  <p><strong>Edad:</strong> ${perfilUsuario.edad} años</p>
  <p><strong>Ocupación:</strong> ${perfilUsuario.ocupacion}</p>
  <h3>Hobbies</h3>
  <ul>${listaHobbies}</ul>
`;