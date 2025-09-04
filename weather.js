fetchdata()
async function fetchdata(){
    try{
        const city =document.getElementById("city").value.tolowerCase()
        const findWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={707b7261d799f9bb79ac33db43426d07}`)

        if (!response.ok){
            throw new Error("This city does not exist")


        }
        const data = await response.json()
        console.log(data)



    }
    catch(error){
        console.error(error)

    }

}


