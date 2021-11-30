const apiKey = '04c6f917c2fd9188ad8f376db93e941b'

const urlMetricQuery = `https://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=04c6f917c2fd9188ad8f376db93e941b`

const urlQuery = `api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}`

const typeIcon = '@2x.png'
const icon = 'https://openweathermap.org/img/wn/'

const getDatos = (url)=>{
    fetch(url)
    .then(res => res.json())
    .then( data => plasmarDatos(data))
}


const plasmarDatos =  (data) =>  {
    console.log(data)
    const iconoClouds = document.getElementById('iconoClouds')
    const tem = document.getElementById('temp')
    const humedad = document.getElementById('humidity')
    const country = document.getElementById('country')
    const ciudad = document.getElementById('ciudad')
    
    iconoClouds.src = icon + data.list[0].weather[0].icon + typeIcon
    tem.textContent = data.list[0].main.temp
    humedad.textContent = data.list[0].main.humidity
    country.textContent = data.list[0].sys.country
    ciudad.textContent = data.list[0].name
}

getDatos(urlMetricQuery)

const form = document.getElementById('form')
const urlMetricCity1 = "https://api.openweathermap.org/data/2.5/find?q="
const urlMetricCity2 = '&units=metric&appid=04c6f917c2fd9188ad8f376db93e941b'

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const city = document.getElementById('ciudad-valor').value
    console.log(city)

    const urlCity = urlMetricCity1 + city + urlMetricCity2
    getDatos(urlCity)
})
