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

    get Nombre() {
        return this.#nombre
    }
    get Edad() {
        return this.#edad
    }
    get Img() {
        return this.#img
    }
    get Sonido() {
        return this.#sonido
    }
    set Comentarios(value) {
        this.#comentarios = value
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

};

let animales = [];

//IIFE

(async () => {
    try {
        const response = await fetch("animales.json")
        if (response.ok === false) {
            throw {
                codigo: 600,
                mensaje: "no existen animales"
            }

        }
        const data = await response.json()
        animales = data.animales

    } catch (error) {
        console.log(error)
    }
})();

//PROCESAR EL FORM.

const tabla = document.querySelector("#tabla")
const animal = document.querySelector("#animal")
const edad = document.querySelector("#edad")
const comentarios = document.querySelector("#comentarios")
const btn = document.querySelector("#btnRegistrar")

btnRegistrar.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("diste click")

    switch (animal.value) {
        case "leon":
            const animalElegido = animales.find((item) => item.name === "leon");
            const leon = new Animal(animalElegido.name, animalElegido.edad,
                animalElegido.imagen,
                animalElegido.sonido);
            animalElegido.pintarHTML();
            break;

        case "lobo":
            const animalElegidoLobo = animales.find((item) => item.name === "lobo");
            const lobo = new Animal(animalElegidoLobo.name, animalElegidoLobo.edad,
                animalElegidoLobo.imagen,
                animalElegidoLobo.sonido);
            animalElegidoLobo.pintarHTML();
            break;




    }


})










