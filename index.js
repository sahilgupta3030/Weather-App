let city = document.getElementById("city");
let image = document.getElementById("img");
let temp = document.getElementById("temp");
let type = document.getElementById("type");
let input = document.getElementById("inp");
let API_key = "a9d52edc788770e64f48195c08205b16";

const data = async function (search) {
  let getData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=Metric`
  );
  console.log(getData);

  let jsondata = await getData.json();
  console.log(jsondata);
  console.log(jsondata.name);

  if (jsondata.cod == 400) {
    alert("Please Enter Location");
    image.src = "./img/error1.png";
    city.innerHTML = "";
    temp.innerHTML = "";
    type.innerHTML = "";
  } else if (jsondata.cod == 404) {
    alert("Please Enter Right Location");
    image.src = "./img/error2.png";
    city.innerHTML = search;
    temp.innerHTML = "";
    type.innerHTML = "";
  } else {
    city.innerHTML = jsondata.name;
    temp.innerHTML = Math.floor(jsondata.main.temp) + "°C";
    type.innerHTML = jsondata.weather[0].main;
  }

  if (type.innerHTML == "Clouds") {
    image.src = "./img/clouds.png";
  } else if (type.innerHTML == "Clear") {
    image.src = "./img/clears.png";
  } else if (type.innerHTML == "Rain") {
    image.src = "./img/rain.png";
  } else if (type.innerHTML == "Snow") {
    image.src = "./img/snow.png";
  } else if (type.innerHTML == "Mist") {
    image.src = "./img/clears.png";
  } else if (type.innerHTML == "Haze") {
    image.src = "./img/haze.png";
  } else if (type.innerHTML == "Storm") {
    image.src = "./img/strom.png";
  } else if (type.innerHTML == "Smoke") {
    image.src = "./img/haze.png";
  }

  input.value = "";
};

function myFun() {
  let search = input.value;
  data(search);
}
