const apiKey= "6eb779c04a0d0c1126a9c4530d0d29af";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.d-flex input');
const searchBtn = document.querySelector('#submit');

  const weatherIcon = document.querySelector("weather_icon");

async function checkMet(city){
    const reponse =await fetch(apiUrl + city + `&appid=${apiKey}`);
     var data = await reponse.json();

     console.log(data)

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".vent").innerHTML = data.vent.speed + "km/h";

         if(data.weather[0].main =="clouds"){
          weatherIcon.src ="icon/cloudy-day-1.svg";
         }

      else if (data.weather[0].main =="Rain"){
         weatherIcon.src= "icon/rainy-1.svg";
      }

      else if (data.weather[0].main =="Drizzle"){
        weatherIcon.src= "images/snowy-6.svg";
     }

     else if (data.weather[0].main =="Mist"){
        weatherIcon.src= "images/snowy-6.svg";
     }


    }
   



    searchBtn.addEventListener ("click", ()=> {
        checkMet( searchBox.value);
        
    })


 