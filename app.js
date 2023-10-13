let input = document.getElementById('searchinput')
let search =()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}&appid=f2bf8ca0636aba5e7b0b2ce55bfa486b`)
.then((data) => data.json())
.then(data => {
    console.log(data)
    input.value = ''
    let temp = document.getElementById('temp')
    let city = document.getElementById('city')
    let humidity = document.getElementById('humidity')
    let speed = document.getElementById('speed')
    let img = document.querySelector('.weather-icon')
    let getspeed = data.wind.speed
    let gethumidity = data.main.humidity
    let gettemp = data.main.temp
    let getcity = data.name
    temp.innerHTML = `${Math.round(gettemp)}°C`
    city.innerHTML = getcity
    humidity.innerHTML = `${gethumidity}%`
    speed.innerHTML = `${getspeed} Km/h`

    if(data.weather[0].main=='Clouds'){
        img.src = 'images/clouds.png'
    }
    else if(data.weather[0].main=='Clear'){
        img.src = 'images/clear.png'
    }
    else if(data.weather[0].main=='Rain'){
        img.src = 'images/rain.png'
    }
    else if(data.weather[0].main=='Drizzle'){
        img.src = 'images/drizzle.png'
    }
    else if(data.weather[0].main=='Mist'){
        img.src = 'images/mist.png'
    }

    

})
.catch(err => console.log(err))

}
