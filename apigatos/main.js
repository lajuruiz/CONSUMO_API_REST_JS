//promesas 

window.addEventListener('DOMContentLoaded', catRandom);
const button= document.getElementById("button-change-cat");
button.addEventListener("click", catRandom)

function catRandom(){

const endpoint="https://api.thecatapi.com/v1/images/search"

fetch(endpoint)  //devuelve una promesa el fetch hace peticiones a la api
    .then(response => response.json())//convertir la respues a algo que js pueda entender ( un objeto por ejemplo)
    .then(data =>{
        const img = document.querySelector("img");
        img.src=data[0].url; //modificarle la propiedad src
    });
}
//  esta es la respuesta de la API
/* [
    {
      "id": "bq5",
      "url": "https://cdn2.thecatapi.com/images/bq5.jpg",
      "width": 1280,
      "height": 851
    }
  ] */





//asyn await

/* window.addEventListener('DOMContentLoaded', catRandom);
const buttons= document.getElementById("button-change-cat");
buttons.addEventListener("click", catRandom)

async function catRandom(){
    const endpoint="https://api.thecatapi.com/v1/images/search?limit=3"

    const response= await fetch(endpoint)
    const data= await response.json()
    const img = document.querySelector("img");
    img.src=data[0].url; 
}

 */

//queryparameters

window.addEventListener('DOMContentLoaded', catRandom);
const buttons= document.getElementById("button-change-cat");
buttons.addEventListener("click", catRandom)

async function catRandom(){
    const endpoint="https://api.thecatapi.com/v1/images/search?limit=3";

    const response= await fetch(endpoint)
    const data= await response.json()

    console.log(data);
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")
    const img3 = document.getElementById("img3")

    img1.src= data[0].url; 
    img2.src= data[1].url;
    img3.src= data[2].url;
}

catRandom()