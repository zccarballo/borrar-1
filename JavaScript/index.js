// Cambio de texto:

document.querySelector("h1").innerHTML = "Vinicunca: montaña de 7 colores";
console.log(document.querySelector("h1").innerHTML);

// Cambio de estilo:

document.querySelector("h1").className = "estilo-h1";
console.log(document.querySelector("h1").className);

// Subo unha imaxe e cambio o seu estilo:

document.querySelector("img").src = "./Fotos/Peru.jpg";
document.querySelector("img").className = "estilo-img";
console.log(document.querySelector("img"));
