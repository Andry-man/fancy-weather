import { input_search, button_search, latitude, longitude, city, select_lang, block_button, button_one, button_two } from "../idContentHtml/idContentHtml";
import { userDate } from "./clock";

select_lang.addEventListener('change', (event) => {
    localStorage.setItem('Lang', select_lang.value);
    userDate()
})
select_lang.value = localStorage.getItem('Lang');
if (localStorage.getItem('Lang') == null) {
    select_lang.value = 'EN'
}







userDate()
const myKeyForOpencagedata = '98e43136882a46fc85f4bb77ddb81387';
const tokenGeo = '5c2c12654fbe54';
const ur = {
    urlaGeo: `https://ipinfo.io/json?token=${tokenGeo}`,
}

export function maps(a, b, c) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcnktbWFuIiwiYSI6ImNrYW84cGo4cjA1MmwyeHFlZm00dHZiZmUifQ.T3scXLpd46I_1DvznsyyRw';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
        center: [a, b], // lng lat
        zoom: c // starting zoom

    });
}


function searchBYCoordinatesCity(params) {
    //SEARCH LOCATION BY TO COORDINATES
    const url = params;
    const ans = [];
    fetch(url)
        .then(res => res.json())
        .then(data => {

            let lng = data.results[0].geometry.lng;
            ans.push(lng)
            let lat = data.results[0].geometry.lat;
            ans.push(lat)
            latitude.innerHTML = `${lat}`;
            longitude.innerHTML = `${lng}`;
            return ans

        })
        .then(data => {
            //API MAPS
            maps(ans[0], ans[1], zoom.value)
        })

}
// Start API MAP & zoom
button_search.addEventListener('click', (event) => {
    if (input_search.value) {
        searchBYCoordinatesCity(`https://api.opencagedata.com/geocode/v1/json?q=${input_search.value}&key=${myKeyForOpencagedata}`);
    }
})
zoom.addEventListener('change', (event) => {
    let numb = event.target.value;
    maps(longitude.innerHTML, latitude.innerHTML, numb)
})

function showCity(param) {
    const url = param;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            city.innerHTML = `${data.city},${data.country}`;
        })
}
showCity(ur.urlaGeo)

function classNameBut() {
    button_one.classList = localStorage.getItem('temperature1');
    button_two.classList = localStorage.getItem('temperature2');
    if (button_one.classList[0] === 'null') {
        button_one.className = 'button_one'
    }
    if (button_two.classList[0] === 'null') {
        button_two.className = 'button_two active'
    }
}
block_button.addEventListener('click', (event) => {
    if (event.target.id === 'button_one') {
        if (event.target.className != 'button_one active') {
            event.target.classList.add('active');
            button_two.className = 'button_two';
        }
    }
    if (event.target.id === 'button_two') {
        if (event.target.className != 'button_two active') {
            event.target.classList.add('active');
            button_one.className = 'button_one';
        }
    }
    localStorage.setItem('temperature1', button_one.className);
    localStorage.setItem('temperature2', button_two.className);
})
classNameBut()