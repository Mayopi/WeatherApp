
const button = document.querySelector('.search-btn')
const tempOutput = document.querySelector('.temp')
const humidityOutput = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind')
const city = document.querySelector('.city')
const descriptionOutput = document.querySelector('.description-text')
const descriptionField = document.querySelector('.weather h3')

button.addEventListener('click', function() {
  //Store User Input
  const userInput = document.querySelector('.search-bar').value
  //Fetching API Call Request
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=db73ce02b3e0c07288fb5055c546cef4&units=metric`)
    //Convert Promise data format to Json data format
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      //Extract Data From API
      const {humidity, temp} = data.main
      const {speed} = data.wind
      const {description} = data.weather[0]
      //Pop element to Website Page
      city.innerText = 'weather in ' + userInput
      tempOutput.innerText = temp + '°C'
      humidityOutput.innerText = 'humidity: ' + humidity + '%'
      windSpeed.innerText = 'windSpeed: ' + speed + ' KM/H'
      descriptionOutput.innerText = description
      descriptionField.innerText = 'Description:'
      //Debug console
      console.log(name,humidity,temp,speed,description) 
      
    })
  
})


/*https://api.weatherapi.com/v1/current.json?key4c71372f4c7843768cd15212221704&q=tokyo&aqi=yes*/


/*
https://api.openweathermap.org/data/2.5/weather?q=london&APPID=db73ce02b3e0c07288fb5055c546cef4&units=metric
*/