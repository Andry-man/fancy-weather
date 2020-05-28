import { input_search, button_search, latitude, longitude } from "../idContentHtml/idContentHtml";
import { positionUser } from "../mapApi/userPosition";

const myKeyForOpencagedata = '98e43136882a46fc85f4bb77ddb81387';
const tokenGeo = '5c2c12654fbe54';
const ur = {
    urlaGeo: `https://ipinfo.io/json?token=${tokenGeo}`,
}
let arr = [];
export function maps(a, b, c) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcnktbWFuIiwiYSI6ImNrYW84cGo4cjA1MmwyeHFlZm00dHZiZmUifQ.T3scXLpd46I_1DvznsyyRw';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
        center: [a, b], // lng lat
        zoom: c // starting zoom

    });
    arr.push(a)
    arr.push(b)
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
// Start API MAP 
button_search.addEventListener('click', (event) => {
        if (input_search.value) {
            searchBYCoordinatesCity(`https://api.opencagedata.com/geocode/v1/json?q=${input_search.value}&key=${myKeyForOpencagedata}`);
        }
    })
    //console.log(ans)
zoom.addEventListener('change', (event) => {
    console.log()
    let numb = event.target.value;
    maps(longitude.innerHTML, latitude.innerHTML, numb)
})