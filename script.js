//access the api with key and url
let apiKey = "bee0451eba80bc84bcb42941589fb7ad";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//accessing the input and button for city name and search
let inputCity = document.querySelector('.search input')
let searchButton = document.querySelector('.search button')

//accessing all the elements for information to our weather app
let climateImages = document.querySelector(".weather-icon")
let cityname = document.querySelector('.weather h2')
let citytemp = document.querySelector('.weather h1')
let humidity = document.querySelector('.humidity')
let windspeed = document.querySelector('.windspeed')


document.querySelector('.error').style.display = "none"
document.querySelector('.weather').style.display = "none"

async function watherdata(city){
    //calling wather api
    const responce = await fetch(apiUrl + city+ `&appid=${apiKey}`)
    //accessed api data into json format
    let data = await responce.json()

    
    
    // if input box is empty and search option is performed 
    if(responce.status == 400){
        document.querySelector('.error p').textContent = "Please Enter for a City"
        document.querySelector('.error').style.display = "block" 
    }
    else if(responce.status == 404){
        document.querySelector('.error p').textContent = "Enter Correct City"
        document.querySelector('.error').style.display = "block"
    } 
    else{

        //modifying data according to city using api fecth data
        cityname.textContent = data.name;
        citytemp.textContent = Math.round(data.main.temp)+ "°C";
        humidity.textContent = data.main.humidity + "%"
        windspeed.textContent = data.wind.speed + "KMPH"

        //changes images according to climate
        if(data.weather[0].main == "Clouds"){
            climateImages.src = "images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            climateImages.src = "images/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
            climateImages.src = "images/rain.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            climateImages.src = "images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            climateImages.src = "images/mist.png"
        }
        document.querySelector('.error').style.display = "none"
        document.querySelector('.weather').style.display = "block"

}

}

searchButton.addEventListener('click',()=>{
    watherdata(inputCity.value);
    inputCity.value =""
})




