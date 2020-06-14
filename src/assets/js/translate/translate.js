import { select_lang, select_lang_m, city, feelslike, textOne, textTwo, textTree, date, weather_one, weather_two } from "../idContentHtml/idContentHtml";

const translatAPI = 'trnsl.1.1.20200505T195708Z.211a8b83fbadf1ec.05cde44b1bf1f63a476934b41a12723899c55f83';
const word = 'минск'




export function translate(param, word) {
    let landDef = 'EN';
    if (localStorage.getItem('Lang') === null) {
        let landDef = 'EN';
    } else {
        landDef = localStorage.getItem('Lang');
    }
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translatAPI}&text=${word}&lang=${localStorage.getItem('defLang').toLowerCase()}-${param.toLowerCase()}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            condition.innerHTML = data.text[0];
        })
}
export function translateTwo(param, word) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translatAPI}&text=${word}&lang=en-${param.toLowerCase()}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            condition.innerHTML = data.text[0];
        })
}

export function translateTree(param, word) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translatAPI}&text=${word}&lang=en-${param.toLowerCase()}`;
    fetch(url)
        .then(res => res.json())

    .then(data => {
        city.innerText = data.text[0];
    })
}

export function translatefour(param) {
    if (param === 'RU') {
        textOne.innerHTML = 'Кажущаяся температура:'
    }
    if (param === 'BE') {
        textOne.innerHTML = 'Ўяўная тэмпература:'
    }
    if (param === 'EN') {
        textOne.innerHTML = 'Apparent temperature:'
    }
}

export function translatefive(param) {
    if (param === 'RU') {
        textTwo.innerHTML = 'Скорость ветра:'
    }
    if (param === 'BE') {
        textTwo.innerHTML = 'Хуткасць ветру:'
    }
    if (param === 'EN') {
        textTwo.innerHTML = 'Wind speed:'
    }
}
export function translatesix(param) {
    if (param === 'RU') {
        textTree.innerHTML = 'Влажность:'
    }
    if (param === 'BE') {
        textTree.innerHTML = 'Вільготнасць:'
    }
    if (param === 'EN') {
        textTree.innerHTML = 'Humidity:'
    }
}
export function translateSeven(param, word) {
    let landDef = 'EN';
    landDef = !localStorage.getItem('Lang') ? 'EN' : localStorage.getItem('Lang')
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translatAPI}&text=${word}&lang=${localStorage.getItem('defLang').toLowerCase()}-${param.toLowerCase()}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            weather_one.innerHTML = data.text[0];
        })
}

export function translateeight(param, word) {
    let landDef = 'EN';
    if (localStorage.getItem('Lang') === null) {
        let landDef = 'EN';
    } else {
        landDef = localStorage.getItem('Lang');
    }
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translatAPI}&text=${word}&lang=${localStorage.getItem('defLang').toLowerCase()}-${param.toLowerCase()}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            weather_two.innerHTML = data.text[0];
        })
}

export function translateBlockOne(param, word, blockOne) {
    let landDef = 'EN';
    if (localStorage.getItem('Lang') === null) {
        let landDef = 'EN';
    } else {
        landDef = localStorage.getItem('Lang');
    }
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translatAPI}&text=${word}&lang=${localStorage.getItem('defLang').toLowerCase()}-${param.toLowerCase()}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            blockOne.innerHTML = data.text[0];
        })
}
export function translateBlock(param, word, block) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translatAPI}&text=${word}&lang=en-${param.toLowerCase()}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            block.innerHTML = data.text[0];
        })
}