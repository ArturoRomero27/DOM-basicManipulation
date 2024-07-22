const h1 = document.querySelector("h1");
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumInputValues)

function sumInputValues(event) {
    console.log({event});

    event.preventDefault();
   
    const sumaInput = (parseInt(input1.value) + parseInt(input2.value))
    
   pResult.innerText = "Resultado: " + sumaInput;
}


