
window.addEventListener('DOMContentLoaded',loadCatRandom);
const buttons= document.getElementById("button-change-cat");
buttons.addEventListener("click", loadCatRandom)

const spanError= document.getElementById("error");

async function loadCatRandom(){
    const apiRandom="https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_mLObpbU9DhqGqlW795tLSWG87wVatDbDztfcWAe1GxTm4s5eeyH14N7iDWCIEVth";


    const response= await fetch(apiRandom);
    const data= await response.json();

    console.log("random");
    console.log(data);

    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")

    img1.src= data[0].url; 
    img2.src= data[1].url;
}

async function loadCatFavourites(){

    const apiFavourite="https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_mLObpbU9DhqGqlW795tLSWG87wVatDbDztfcWAe1GxTm4s5eeyH14N7iDWCIEVth";

    const response= await fetch(apiFavourite);
    const data= await response.json();
    console.log("favourite");
    console.log(data);

}

loadCatRandom()
loadCatFavourites()