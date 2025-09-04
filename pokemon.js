fetchdata();

async function fetchdata(){
    try{
        const pokemon =document.getElementById("pokemon").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        if (!response.ok){
            throw new Error("This pokemon does not exist")


        }
        const data = await response.json()
        const pokemonSprite=data.sprites.front_default
        const imgElement=document.getElementById("pokemonSprite")
        imgElement.src=pokemonSprite
        imgElement.style.display="block"



    }
    catch(error){
        console.error(error)

    }

}


