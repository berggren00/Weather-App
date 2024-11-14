// Array med de olika städerna
const cities = [
  {
    name: "Stockholm",
    temperature: 18,
    humidity: 23,
    windSpeed: 2,
    icon: "assets/sun.png",
  },
  {
    name: "Göteborg",
    temperature: 5,
    humidity: 14,
    windSpeed: 8,
    icon: "assets/raining.png",
  },
  {
    name: "Malmö",
    temperature: 4,
    humidity: 50,
    windSpeed: 12,
    icon: "assets/storm.png",
  },
  {
    name: "Uppsala",
    temperature: -3,
    humidity: 10,
    windSpeed: 4,
    icon: "assets/snowy.png",
  },
];

let inputElement = document.querySelector("input");
let searchButton = document.querySelector("button");

searchButton.addEventListener("click", updateSearchedCity);

// Funktion för att hitta det användaren sökt på
function updateSearchedCity() {
  let cityName = inputElement.value.trim(); // "trim" för att få fram sökning oavsett eventuella mellanslag i början/slutet
  let foundCity = null;

  for (const city of cities) {
    if (city.name.toLowerCase() === cityName.toLowerCase()) {
      // Gör att sökningen funkar oavsett stora/små bokstäver
      foundCity = city;
      localStorage.setItem("foundCity", JSON.stringify(foundCity));
      break;
    }
  }

  // Uppdatera väderinformationen
  if (foundCity) {
    updateWeatherInfo(foundCity);
  } else {
    alert("Staden hittades inte."); // Alert ifall staden inte finns med
  }
}

// Uppdatera DOM med väderinformation
function updateWeatherInfo(city) {
  const { name } = city;
  console.log(name);
  document.querySelector(".city").textContent = city.name;
  document.querySelector(".temp").textContent = `${city.temperature}°C`;
  document.querySelector(".humidity").textContent = `${city.humidity}%`;
  document.querySelector(".wind").textContent = `${city.windSpeed} m/s`;

  // Uppdatera väderikon
  document.querySelector(".weather-icon").src = city.icon;
}

// Visa/uppdatera till den stad sparad i local storage
const localCity = JSON.parse(localStorage.getItem("foundCity"));
if (localCity) {
  updateWeatherInfo(localCity);
}
