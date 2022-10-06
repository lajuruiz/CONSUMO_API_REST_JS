window.addEventListener('DOMContentLoaded', catRandom);
const buttons= document.getElementById("button-change-cat");
buttons.addEventListener("click", catRandom)

async function catRandom(){
    const endpoint="https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_mLObpbU9DhqGqlW795tLSWG87wVatD bDztfcWAe1GxTm4s5eeyH14N7iDWCI EVth";

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


//live_L6fUTraGN5eXQ0ohP8Ru2gnjg6rAcIwIMMd0w7q3VdPbRSbDdBkCkUnAo6ej9Qq9