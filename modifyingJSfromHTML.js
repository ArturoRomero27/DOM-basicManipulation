const h1 = document.querySelector("h1");
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito, 
    pid,
    input, 
});

h1.innerHTML = "Patito" 
h1.setAttribute("class", "red")
h1.classList.add("verde")
h1.classList.contains("verde")

input.value = "456"

const img = document.createElement("img")
img.setAttribute("src", " https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png")

pid.innerHTML = img
console.log(img);

pid.innerHTML = "" 
 pid.append(img);


