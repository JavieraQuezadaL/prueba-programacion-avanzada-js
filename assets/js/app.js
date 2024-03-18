class Animal {
    #nombre
    #edad
    #img
    #comentarios
    #sonido

    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    
    get nombre() {
        return this.#nombre
    }
    get edad() {
        return this.#edad
    }
    get img() {
        return this.#img
    }
    get comentarios() {
        return this.#comentarios
    }
    get sonido() {
        return this.#sonido
    }
}

class Leon extends Animal {
    pintarHTML(elemento) {
        elemento.innerHTML += `${this.nombre} <img src="${this.img}" `
    }
}

class Lobo extends Animal {
    pintarHTML(elemento) {
        elemento.innerHTML += `${this.nombre} <img src="${this.img}" `
    }

}

class Oso extends Animal {
    pintarHTML(elemento) {
        elemento.innerHTML += `${this.nombre} <img src="${this.img}" `
    }

}

class Serpiente extends Animal {
    pintarHTML(elemento) {
        elemento.innerHTML += `${this.nombre} <img src="${this.img}" `
    }

}

class Aguila extends Animal {
    pintarHTML(elemento) {
        elemento.innerHTML += `${this.nombre} <img src="${this.img}" `
    }

}

let animales = [];

// //IIFE

// (async () => {
//     try {
//         const response = await fetch("animales.json")
//         if (response.ok === false) {
//             throw {
//                 codigo: 600,
//                 mensaje: "no existen animales"
//             }

//         }
//         const data = await response.json()
//         animales = data
//     } catch (error) {
//         console.log(error)
//     }
// })();

// const animalFormulario = document.querySelector("#animalFormulario")

// animalFormulario.addEventListener("submit", (evento) => {
//     evento.preventDefault()

//     constAnimal = animales.find((item) => 
//     item.nombre.toLowerCase() === animalSeleccion.value.toLowerCase())
   
//     switch ()
// } )



