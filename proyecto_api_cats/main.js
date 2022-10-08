
window.addEventListener('DOMContentLoaded', () =>{
    loadRandomCats()
    loadFavouriteCats()
});

const buttons = document.getElementById("button-change-cat");
buttons.addEventListener("click", loadRandomCats);

/* const button = document.getElementById("btn1");
button.addEventListener("click", saveFavouriteCats);

const buttonx = document.getElementById("btn2");
buttonx.addEventListener("click", saveFavouriteCats);

const buttonx = document.getElementById("btn2");
buttonx.addEventListener("click", saveFavouriteCats);
 */

const API_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_mLObpbU9DhqGqlW795tLSWG87wVatDbDztfcWAe1GxTm4s5eeyH14N7iDWCIEVth";

const API_FAVOURITE = "https://api.thecatapi.com/v1/favourites?api_key=live_mLObpbU9DhqGqlW795tLSWG87wVatDbDztfcWAe1GxTm4s5eeyH14N7iDWCIEVth";

const API_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=live_mLObpbU9DhqGqlW795tLSWG87wVatDbDztfcWAe1GxTm4s5eeyH14N7iDWCIEVth`;


const SPAN_ERROR = document.getElementById("error");

async function loadRandomCats(){
    const response = await fetch(API_RANDOM);
    const data = await response.json();
    console.log("random");
    console.log(data);

    //cualquier cosa que no sea 200
    
    if(response.status !== 200 ){
        SPAN_ERROR.innerHTML = "hubo un error" +response.status;
    }else{
        const img1 = document.getElementById("img1");
        const img2 = document.getElementById("img2");
        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");

        img1.src = data[0].url; 
        img2.src = data[1].url;

        btn1.onclick=() => {saveFavouriteCats(data[0].id)};
        btn2.onclick= () =>{saveFavouriteCats(data[1].id)}
    }
}

async function loadFavouriteCats(){

    const response = await fetch(API_FAVOURITE);
    const data = await response.json();
    console.log("favourite");
    console.log(data);

    if(response.status !== 200 ){
        SPAN_ERROR.innerHTML = "hubo un error:" + response.status + data.message;
    } else{
        const section = document.getElementById("favoriteCats");
        section.innerHTML= "";

        const h2= document.createElement("h2");
        const h2Text= document.createTextNode("Favorities Cats")
        h2.appendChild(h2Text);
        section.appendChild(h2);

        data.forEach(cat => {
            const article = document.createElement("article");
            const image = document.createElement("img");
            const button = document.createElement("button");
            const buttonText = document.createTextNode("Sacar al Cat de favoritos");

            //agregar los nodos al DOM
            image.src=cat.image.url
            button.appendChild (buttonText);
            button.onclick = () => deleteFavou(cat.id);
            article.appendChild(image);
            article.appendChild(button);
            section.appendChild(article);
        });
    }
}

//tipo POST 
//stringify= string que por dentro tiene un json.
async function saveFavouriteCats(id){
    const response = await fetch(API_FAVOURITE, {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({image_id:id}),
    });

    const data = await response.json();

    console.log("save")
    console.log(response)

    if(response.status !== 200 ){
        SPAN_ERROR.innerHTML = "hubo un error:" + response.status + data.message;
    }else{
        console.error("michi guardado en favoritos")
        loadFavouriteCats();
    }
}

async function deleteFavou(id){
    const response=await fetch(API_DELETE(id),{
        method: 'DELETE',
    });
    const data = await response.json();

    if(response.status !== 200 ){
        SPAN_ERROR.innerHTML = "hubo un error:" + response.status + data.message;
    }else{
        console.error("michi eliminado de favoritos")
        loadFavouriteCats()
    }
}
