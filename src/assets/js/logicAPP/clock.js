import { clock, date } from "../../js/idContentHtml/idContentHtml";

function funClock() {
    const time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    let clockStart = h + ':' + m + ':' + s;
    clock.textContent = clockStart;
}
funClock();
setInterval(funClock, 1000);


export function userDate(sel) {
    const dat = new Date();
    let selectorDay = 0;
    let selectorMon = 0;
    const dayEn = {
        0: 'Sun',
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
    }
    const dayRu = {
        0: 'Вск',
        1: 'Пон',
        2: 'Вто',
        3: 'Сре',
        4: 'Чет',
        5: 'Пят',
        6: 'Суб',
    }
    const dayBe = {
        0: 'Няд',
        1: 'Пан',
        2: 'Аўт',
        3: 'Сер',
        4: 'Чац',
        5: 'Пят',
        6: 'Суб',
    }
    const monEn = {
        0: 'Dec',
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
    }
    const monRu = {
        0: 'Дек',
        1: 'Янв',
        2: 'Фев',
        3: 'Мар',
        4: 'Апр',
        5: 'Май',
        6: 'Июн',
        7: 'Июл',
        8: 'Авг',
        9: 'Сен',
        10: 'Окт',
        11: 'Ноя',
    }
    const monBe = {
        0: 'Сту',
        1: 'Лют',
        2: 'Сак',
        3: 'Кра',
        4: 'Тра',
        5: 'Чэр',
        6: 'Лiп',
        7: 'Жнi',
        8: 'Вер',
        9: 'Кас',
        10: 'Лiс',
        11: 'Сне',
    }
    if (localStorage.getItem('Lang') == 'RU') {
        selectorDay = dayRu;
        selectorMon = monRu;
    }
    if (localStorage.getItem('Lang') == 'EN') {
        selectorDay = dayEn;
        selectorMon = monEn;
    }
    if (localStorage.getItem('Lang') == 'BE') {
        selectorDay = dayBe;
        selectorMon = monBe;
    }
    date.innerText = `${selectorDay[dat.getDay()]}, ${dat.getDate()} ${selectorMon[dat.getMonth()]}`;
}
userDate(localStorage.getItem('Lang'))