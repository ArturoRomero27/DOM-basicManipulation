const name = "Juan David"
const lastname = "Castro Gallego"
const completeName = name + lastname
const nickname = "juandc"

function id(a, b) {

    return "Mi nombre es " + a + ", pero prefiero que me digas " + b + "."
}

console.log(id(completeName, nickname))

// 2 ejercicio 



function subscriptionType(...subs) {
    subs.forEach(sub => {
        if (sub == "Free") {
            console.log("Solo puedes tomar los cursos gratis");
        } else if (sub == "Basic") {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        } else if (sub == "Expert") {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        } else {
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }
    });
}

subscriptionType("Free", "Basic", "Expert", "ExpertPlus");

const subscriptionTipe = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"

}

function findSubscriptionType(subs) {
    if (subscriptionTipe[subs]) {console.log(subscriptionTipe[subs])
        return;
        
    }

    console.warn("Ese tipo de subscripcion no existe")
   
}

console.log(findSubscriptionType("Free"))


// ejercicio 3 

// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// for (let i = 10; i >= 2; i--) {
//     console.log("El valor de i es: " + i);
// }

// Primer bucle while: de 0 a 4
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

// Segundo bucle while: de 10 a 2
i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

// ejercicio 4

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar() {
    rl.question('¿Cuánto es 2 + 2? ', (respuesta) => {
        if (parseInt(respuesta) === 4) {
            console.log('¡Felicidades, has respondido correctamente!');
            rl.close();
        } else {
            console.log('Respuesta incorrecta, por favor intenta de nuevo.');
            preguntar();
        }
    });
}

preguntar();

// ejercicio 5 Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function firstElement(array) {
    return array[0]

}

console.log(firstElement([6, 4, 3]));

// ejercicio 6 Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function allElements(array) {

    for (const element of array) {
        return element;

    }
}

console.log(allElements([4, 8, 7]));

// ejercicio 7 Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function printElements(obj) {
    // Check if the parameter is indeed an object
    if (typeof obj === 'object' && obj !== null) {
        // Iterate over the object's properties
        for (let key in obj) {
            // Check if the property is an own property of the object
            if (obj.hasOwnProperty(key)) {
                console.log(key + ': ' + obj[key]);
            }
        }
    } else {
        console.log('The parameter is not a valid object.');
    }
}

// Sample object
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Calling the function with the object as parameter
printElements(person);