const searchTemperature=()=>{
    const userInput = document.getElementById(`city-name`).value;
    fetchData(userInput)

}


const fetchData = async(cityName)=>{
    
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a635628f7603f1bdd3a4c8442f13057d&units=metric`)
    const data = await res.json()
    const temp = data.main
    const city = data.name
    const temperature = temp.temp

    document.getElementById(`city`).innerHTML = city;
    document.getElementById(`temperature`).innerHTML = temperature;
    
    
}
