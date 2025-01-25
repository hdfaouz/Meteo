
const apiKey= "6eb779c04a0d0c1126a9c4530d0d29af";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiDays ="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const searchBox = document.querySelector('.d-flex input');
const searchBtn = document.querySelector('#submit');
const weatherIcon = document.getElementById("weather_icon");



async function checkMet(city){
    const reponse =await fetch(apiUrl + city + `&appid=${apiKey}`);
     var data = await reponse.json();

     console.log(data);
     

    

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".vent").innerHTML = data.wind.speed + "km/h";


         if(data.weather[0].main.toLowerCase() == 'clouds'){
             weatherIcon.src = 'icon/cloudy-day-1.svg';
           }
          else if (data.weather[0].main == 'Clear'){          
            weatherIcon.src= './icon/day.svg';
          }
            else if (data.weather[0].main == 'Rain'){
             weatherIcon.src = './icon/rainy-6.svg';
        }
            else if (data.weather[0].main.toLowerCase() == 'snowy'){
             weatherIcon.src= '.icon/snowy-1.svg';
           }
           

    }
   



    searchBtn.addEventListener ("click", ()=> {
        checkMet( searchBox.value);
        checkDays(searchBox.value);
        
    })


    async function checkDays(city){
      const reponse =await fetch(apiDays + city + `&appid=${apiKey}`);
       var dataDays= await reponse.json();
  
       console.log(dataDays);


       const days =dataDays.list.filter((item) => item.dt_txt.includes("12:00:00"));


       
       document.querySelector('#first-day-name').innerHTML= new Date(days[0].dt_txt).toLocaleDateString("en-US", {weekday: "long" });
       document.querySelector('#second-day-name').innerHTML= new Date(days[1].dt_txt).toLocaleDateString("en-US", {weekday: "long" });
       document.querySelector('#third-day-name').innerHTML= new Date(days[2].dt_txt).toLocaleDateString("en-US", {weekday: "long" });
       document.querySelector('#fourth-day-name').innerHTML= new Date(days[3].dt_txt).toLocaleDateString("en-US", {weekday: "long" });
       document.querySelector('#fifth-day-name').innerHTML= new Date(days[4].dt_txt).toLocaleDateString("en-US", {weekday: "long" });


   



       document.querySelector('#first-day-temp').innerHTML= Math.round(days[0].main.temp)+" °C";
       document.querySelector('#second-day-temp').innerHTML= Math.round(days[1].main.temp)+" °C";
       document.querySelector('#third-day-temp').innerHTML= Math.round(days[2].main.temp)+" °C";
       document.querySelector('#fourth-day-temp').innerHTML= Math.round(days[3].main.temp)+" °C";
       document.querySelector('#fifth-day-temp').innerHTML= Math.round(days[4].main.temp)+" °C";
    }


     
  












    
 


 