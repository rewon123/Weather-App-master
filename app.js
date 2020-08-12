window.addEventListener('load',()=>{
    let countryName = document.getElementById("countryName")
    let Temp = document.getElementById("Temp")
    let weather = document.getElementById("weather")

   if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position=>{
           let lat = position.coords.latitude
           let long = position.coords.longitude
           let key = "446b0eabf6f72c87bfeff3dfd20a20a4"
           
           let proxys = "https://cors-anywhere.herokuapp.com/"
           let api = `${proxys}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
          
           fetch(api)
           .then(res=>{
              
               return res.json()
           })
           .then(data=>{
               console.log(data)
               countryName.innerHTML = data.name
               Temp.innerHTML = data.main.temp-273.15
               weather.innerHTML = data.weather[0].main
           })
           
       })
   }
})