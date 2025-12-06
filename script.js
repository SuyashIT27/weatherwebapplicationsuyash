let result = document.getElementById("output");
let temp = document.getElementById("temp");
let tempMax = document.getElementById("tempMax");
let tempMin = document.getElementById("tempMin");
let Humidity = document.getElementById("Humidity");
let Cloudy = document.getElementById("Cloudy");
let Wind = document.getElementById("Wind");
let Location2 = document.getElementById("Locationn");
let url = "";
function show_result() {
  let input = document.getElementById("text");
  let givenInput = input.value;
  result.innerText = givenInput;
  let api = "ae71799cd0cd41639f755659250612";
  url = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${givenInput}`;
  console.log(url);
  data(url).then((result) => {
    temp.innerText = result.temp + "°C";
    tempMax.innerText = result.tempMax1 + "°C";
    Humidity.innerText = result.Humidity1 + "%";
    Cloudy.innerText = result.Cloudy1 + "%";
    Wind.innerText = result.Wind + "Km/Hr";
    Location2.innerText = result.location1;
  });
}

let data = async (link) => {
  const getData = await fetch(link);
  let status = await getData.ok;
  let respense = await getData.status;
  const extractData = await getData.json();
  let temp = extractData.current.temp_c;
  let tempMax1 = extractData.current.feelslike_c;
  let Humidity1 = extractData.current.humidity;
  let Cloudy1 = extractData.current.cloud;
  let Wind = extractData.current.wind_kph;
  let location1 = extractData.location.country;
  console.log(extractData);
  console.log(temp, tempMax1, Humidity1, Cloudy1, Wind);
  return { temp, tempMax1, Humidity1, Cloudy1, Wind, location1 };
};
