import { input_search, body, button_refresh, block_button_m, button_one_m, button_two_m, container_search, navbarToggleExternalContent, button_refresh_m, button_mobile_navbar, button_search, latitude, longitude, city, select_lang, select_lang_m, block_button, button_one, button_two, textOne, textTwo, textTree, weather_one, weather_two, weather_tree, spinner } from "../idContentHtml/idContentHtml";
import { userDate } from "./clock";
import { shoWeather, weatherapi, weather, weatherCel } from "../weather/weather";
import { translate, translateTree, translatefour, translatefive, translatesix, translateSeven, translateeight, translateBlockOne } from "../translate/translate";



localStorage.setItem('defLang', select_lang.value);

select_lang.addEventListener('change', (event) => {
    localStorage.setItem('Lang', select_lang.value);
    translate(localStorage.getItem('Lang'), condition.innerHTML);
    translateTree(select_lang.value, city.innerHTML);
    translatefour(select_lang.value);
    translatefive(select_lang.value);
    translatesix(select_lang.value);
    translateBlockOne(localStorage.getItem('Lang'), weather_one.innerHTML, weather_one);
    translateBlockOne(localStorage.getItem('Lang'), weather_two.innerHTML, weather_two);
    translateBlockOne(localStorage.getItem('Lang'), weather_tree.innerHTML, weather_tree);
    userDate();
    localStorage.setItem('defLang', select_lang.value);
    select_lang_m.value = select_lang.value;
})
select_lang.value = localStorage.getItem('Lang');
if (localStorage.getItem('Lang') === null) {
    select_lang.value = 'EN'
} else {
    localStorage.setItem('defLang', localStorage.getItem('Lang'));
}


select_lang_m.addEventListener('change', (event) => {
    localStorage.setItem('Lang', select_lang_m.value);
    translate(localStorage.getItem('Lang'), condition.innerHTML);
    translateTree(select_lang_m.value, city.innerHTML);
    translatefour(select_lang_m.value);
    translatefive(select_lang_m.value);
    translatesix(select_lang_m.value);
    translateSeven(localStorage.getItem('Lang'), weather_one.innerHTML);
    translateeight(localStorage.getItem('Lang'), weather_two.innerHTML);
    translateNine(localStorage.getItem('Lang'), weather_tree.innerHTML);
    userDate();
    localStorage.setItem('defLang', select_lang_m.value);
    select_lang.value = select_lang_m.value;
})
select_lang_m.value = localStorage.getItem('Lang');
if (localStorage.getItem('Lang') == null) {
    select_lang_m.value = 'EN'
} else {
    localStorage.setItem('defLang', localStorage.getItem('Lang'));
}









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
    spinner.className = 'nospinner';
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
        spinner.className = 'spinner';
        searchBYCoordinatesCity(`https://api.opencagedata.com/geocode/v1/json?q=${input_search.value}&key=${myKeyForOpencagedata}`);
        shoWeather(weatherapi, input_search.value)
        city.innerHTML = input_search.value;
    }
})
window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        spinner.className = 'spinner';
        searchBYCoordinatesCity(`https://api.opencagedata.com/geocode/v1/json?q=${input_search.value}&key=${myKeyForOpencagedata}`);
        shoWeather(weatherapi, input_search.value)
        city.innerHTML = input_search.value;
        event.preventDefault()
    }
})

zoom.addEventListener('change', (event) => {
    let numb = event.target.value;
    spinner.className = 'spinner';
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



function classNameBut() {
    button_one.classList = localStorage.getItem('temperature1');
    button_two.classList = localStorage.getItem('temperature2');
    button_one_m.classList = localStorage.getItem('temperature1_m');
    button_two_m.classList = localStorage.getItem('temperature2_m');
    if (button_one.classList[0] === 'null') {
        button_one.className = 'button_one'
        button_one_m.className = 'button_one_m'

    }
    if (button_one_m.classList[0] === 'null') {
        button_one_m.className = 'button_one_m'
        button_one.className = 'button_one'


    }
    if (button_two.classList[0] === 'null') {
        button_two.className = 'button_two active'
        button_two_m.className = 'button_two_m active'

    }
    if (button_two_m.classList[0] === 'null') {
        button_two_m.className = 'button_two_m active'
        button_two.className = 'button_two active'

    }
}

block_button.addEventListener('click', (event) => {
    if (event.target.id === 'button_one') {
        if (event.target.className != 'button_one active') {
            event.target.classList.add('active');
            button_one_m.className = 'button_one_m active';

            button_two.className = 'button_two';
            button_two_m.className = 'button_two_m';

            weather(weatherapi, city.innerHTML.slice(0, -3))

        }
    }

    if (event.target.id === 'button_two') {
        if (event.target.className != 'button_two active') {
            event.target.classList.add('active');
            button_two_m.className = 'button_two active';

            button_one.className = 'button_one';
            button_one_m.className = 'button_one_m';
            weatherCel(weatherapi, city.innerHTML.slice(0, -3))

        }

    }
    localStorage.setItem('temperature1', button_one.className);
    localStorage.setItem('temperature1_m', localStorage.getItem('temperature1'));
    localStorage.setItem('temperature2', button_two.className);
    localStorage.setItem('temperature2_m', localStorage.getItem('temperature2'));

})
block_button_m.addEventListener('click', (event) => {
    if (event.target.id === 'button_one_m') {
        if (event.target.className != 'button_one_m active') {
            event.target.classList.add('active');
            button_one.className = 'button_one active';
            button_two_m.className = 'button_two_m';
            button_two.className = 'button_two';
            weather(weatherapi, city.innerHTML.slice(0, -3))

        }
    }
    if (event.target.id === 'button_two_m') {
        if (event.target.className != 'button_two_m active') {
            event.target.classList.add('active');
            button_two.className = 'button_two active';
            button_one_m.className = 'button_one_m';
            button_one.className = 'button_one';
            weatherCel(weatherapi, city.innerHTML.slice(0, -3))

        }

    }
    localStorage.setItem('temperature1_m', button_one_m.className);
    localStorage.setItem('temperature1', localStorage.getItem('temperature1_m'));
    localStorage.setItem('temperature2_m', button_two_m.className);
    localStorage.setItem('temperature2', localStorage.getItem('temperature2_m'));

})


function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=w9otNYZg2HE53FdqRc_avqMxt5p6i-ua0VvPgpiF7-k';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            body.style.backgroundImage = `url('${data.urls.regular}')`
        });

}

button_refresh.addEventListener('click', (event) => {
    getLinkToImage()
})

button_refresh_m.addEventListener('click', (event) => {
    getLinkToImage()
})


button_mobile_navbar.addEventListener('click', (event) => {
    if (navbarToggleExternalContent.className === 'collapse') {
        container_search.style.display = 'none';
    }
    if (navbarToggleExternalContent.className === 'collapse show') {
        setTimeout(function() { container_search.style.display = 'block'; }, 480)

    }
})
userDate()
getLinkToImage()
classNameBut()
showCity(ur.urlaGeo)