var cityInput = document.getElementById("cityInput");
var addInput = document.getElementById("add");
var cityOutput = document.getElementById("cityoutput");
var desOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");

const apikey = "3045dd712ffe6e702e3245525ac7fa38";


function convertToC(value){
    return (value -273).toFixed(2);

}

async function GetWeather(){
    
    var latANDlon =await( await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=${apikey}`)).json();


    var lat = latANDlon[0]["lat"];
    var lon = latANDlon[0]["lon"];

    var weatherResult =await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`)).json();

   
    setInfo(weatherResult);
   
}

function setInfo(data){
    var cityName = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];


    cityOutput.innerHTML =`city : ${ cityName}`;
    desOutput.innerHTML = `description : ${description}`;
    tempOutput.innerHTML = `tempreture : ${convertToC(temp)}`;
    windOutput.innerHTML = `wind spped : ${wind} km/h`;

}

addInput.addEventListener('click',GetWeather);