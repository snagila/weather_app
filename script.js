const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "6d04e8e2ddf379ef7551d741424bedd8";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  var data = await response.json();
  //   console.log(data);(to see the data coming)

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./mists.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
