let weather = {
    apiKey: "1a4ad3f46332a2b06ce6bfafe57c3b49",
    fetchWeather: function (city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
        
    },
    displayWeather:function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main
        const {speed} = data.wind
        console.log(name,icon,description,temp,humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage ="url(background.jpg)";
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);

        
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });


  weather.fetchWeather("Toronto")