import { temp, sign, condition, feelslike, gust, humidity, img_weather } from "../idContentHtml/idContentHtml";

const weatherapi = 'f4fbb14dfb2c48e383d155502203005';
const city = 'минск'
const keys = {
    weather: `https://api.weatherapi.com/v1/forecast.json?key=${weatherapi}&q=${city}&days=3`,
}

function shoWeather(param) {
    const url = param;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            img_weather.src = data.current.condition.icon
            temp.innerHTML = data.current.temp_c;
            condition.innerHTML = data.current.condition.text;
            feelslike.innerHTML = `Apparent Temperature: ${data.current.feelslike_c}${sign.innerHTML}`;
            gust.innerHTML = `Wind speed: ${data.current.gust_mph} mph`;
            humidity.innerHTML = `Humidity: ${data.current.humidity} %`;
        })
}
shoWeather(keys.weather)

function changeInfo(t, fl, firstDay, secondDay, thirdDay) {
    console.log('t')
}