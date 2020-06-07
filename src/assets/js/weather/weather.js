import { temp, sign, condition, feelslike, gust, humidity, img_weather, weather_one, weather_two, weather_tree, temp_one, temp_two, temp_tree, city, infoAT, infoWS, InfoH, textOne, textTwo, textTree, weather_one_img, weather_two_img, weather_tree_img, button_one, button_one_m, button_two, button_two_m } from "../idContentHtml/idContentHtml";
import { translateTwo, translateTree, translatefour, translatefive, translatesix, translateSeven_ONE, translateeight_ONE, translateNine_ONE } from "../translate/translate";

export const weatherapi = 'f4fbb14dfb2c48e383d155502203005';

const cit = 'Минск';
// const keys = {
//     weather: `https://api.weatherapi.com/v1/forecast.json?key=${weatherapi}&q=${citys}&days=3`,
// }

export function shoWeather(weatherapi, citys) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherapi}&q=${citys}&days=3`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            img_weather.src = data.current.condition.icon
            temp.innerHTML = data.current.temp_c;
            condition.innerHTML = data.current.condition.text;
            infoAT.innerHTML = `${data.current.feelslike_c}${sign.innerHTML}`;
            infoWS.innerHTML = `${data.current.gust_mph}mph`;
            InfoH.innerHTML = ` ${data.current.humidity} %`;
            weather_one.innerHTML = `${data.forecast.forecastday[0].day.condition.text}`;
            weather_one_img.innerHTML = `<img class="img_icon" src="https:${data.forecast.forecastday[0].day.condition.icon}" alt="img">`
            weather_two.innerHTML = `${data.forecast.forecastday[1].day.condition.text}`;
            weather_two_img.innerHTML = `<img class="img_icon" src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="img">`
            weather_tree.innerHTML = `${data.forecast.forecastday[2].day.condition.text}`;
            weather_tree_img.innerHTML = `<img class="img_icon" src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="img">`
            temp_one.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} ${sign.innerHTML}`;
            temp_two.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c} ${sign.innerHTML}`;
            temp_tree.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_c} ${sign.innerHTML}`;
            translateTwo(select_lang.value, condition.innerHTML);
            translatefour(select_lang.value);
            translatefive(select_lang.value);
            translatesix(select_lang.value);
            translateSeven_ONE(select_lang.value, weather_one.innerHTML)
            translateeight_ONE(select_lang.value, weather_two.innerHTML)
            translateNine_ONE(select_lang.value, weather_tree.innerHTML)
        })
}
shoWeather(weatherapi, cit)


export function weather(weatherapi, citys) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherapi}&q=${citys}&days=3`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            temp.innerHTML = data.current.temp_f;
            sign.innerHTML = '°F'
            infoAT.innerHTML = `${data.current.feelslike_f}°F`;
            temp_one.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_f}°F`;
            temp_two.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_f}°F`;
            temp_tree.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_f}°F`;
        })
}
export function weatherCel(weatherapi, citys) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherapi}&q=${citys}&days=3`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            temp.innerHTML = data.current.temp_c;
            sign.innerHTML = '°'
            infoAT.innerHTML = `${data.current.feelslike_c}°`;
            temp_one.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}°`;
            temp_two.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c}°`;
            temp_tree.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_c}°`;
        })
}

function startTemp() {
    if (button_one_m.className == 'button_one_m active' || button_one.className == 'button_one active') {
        weather(weatherapi, city.innerHTML.slice(0, -3))

    }
    if (button_two_m.className == 'button_two_m active' || button_two.className == 'button_two active') {
        weatherCel(weatherapi, city.innerHTML.slice(0, -3))
    }
}
setTimeout(startTemp, 1000)