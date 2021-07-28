/*api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}*/
const weatherApi = {
    key:"f2c73669adda9478e0a1ceaba038dc89",
    baseurl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchinputbox = document.getElementById("input-box");

searchinputbox.addEventListener("keypress",(event)=>{
    if(event.keyCode == 13) {
    console.log(searchinputbox.value);
    GetweatherReport(searchinputbox.value);
    document.querySelector('.weather-body').style.display="block";
    }
});
//Event listener function on keypress
function GetweatherReport(city){
     fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
     .then(weather => {
         return weather.json();
     }).then(showWeatherReport);
 }
//Get weather report
 function showWeatherReport(weather)
 {
     console.log(weather);
     let city=document.getElementById('city');
     city.innerText=`${weather.name},${weather.sys.country}`;

     let temperature=document.getElementById('temp');
     temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

     let minMaxtemp=document.getElementById('min-max');
     minMaxtemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C(min) / ${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

     let weatherType=document.getElementById('weather');
     weatherType.innerText=`${weather.weather[0].main}`;

     let date=document.getElementById('date');
     let todayDate=new Date();
     date.innerText=dateManage(todayDate);

     if(weatherType.textContent=='Clear')
     {
         document.body.style.backgroundImage="url('images/clear.jpg')";
     }
     else if(weatherType.textContent=='Fog')
     {
         document.body.style.backgroundImage="url('images/fog.jpg')";
     }
     else if(weatherType.textContent=='Haze')
     {
         document.body.style.backgroundImage="url('images/haze.jpg')";
     }
     else if(weatherType.textContent=='Rain')
     {
         document.body.style.backgroundImage="url('images/rainy.jpg')";
     }
     else if(weatherType.textContent=='Clouds')
     {
         document.body.style.backgroundImage="url('images/cloud.png')";
     }
     else if(weatherType.textContent=='Sunny')
     {
         document.body.style.backgroundImage="url('images/sunny.jpg')";
     }
     else if(weatherType.textContent=='Mist')
     {
         document.body.style.backgroundImage="url('images/mist.jpg')";
     }
     else if(weatherType.textContent=='Smoke')
     {
         document.body.style.backgroundImage="url('images/smoke.jpg')";
     }
     else if(weatherType.textContent=='Dust')
     {
         document.body.style.backgroundImage="url('images/dust.jpg')";
     }
 }

    
//Show weather report
function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];

    return `${date} ${month} (${day}),${year}`;
}