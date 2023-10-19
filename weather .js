const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey = '6bea00608b0f4483591e3650476e9ee9';
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();


  console.log(data);
  document.querySelector(".weather h1").innerHTML=Math.round(data.main.temp )+ "°C"
  document.querySelector(".humindity").innerHTML=data.main.humidity + '%'
  document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"
  document.querySelector(".city").innerHTML=data.name


}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

function convertCelsiusToFahrenheit() {
  const celsiusElement = document.querySelector(".temp");
  const celsiusText = celsiusElement.textContent;
  const celsius = parseFloat(celsiusText);
  
 
    const fahrenheit = (celsius * 9/5) + 32;
    document.querySelector(".f").innerHTML = `${fahrenheit} F`;
}


