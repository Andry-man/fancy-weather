import { clock, date, firstDay, secondDay, thirDay, select_lang } from "../../js/idContentHtml/idContentHtml";

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
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec',
    }
    const monRu = {
        0: 'Янв',
        1: 'Фев',
        2: 'Мар',
        3: 'Апр',
        4: 'Май',
        5: 'Июн',
        6: 'Июл',
        7: 'Авг',
        8: 'Сен',
        9: 'Окт',
        10: 'Ноя',
        11: 'Дек',
    }
    const monBe = {
        0: 'Сту',
        1: 'Лют',
        2: 'Сак',
        3: 'Кра',
        4: 'Май',
        5: 'Чэр',
        6: 'Лiп',
        7: 'Жнi',
        8: 'Вер',
        9: 'Кас',
        10: 'Лiс',
        11: 'Сне',
    }
    if (select_lang.value == 'RU') {
        selectorDay = dayRu;
        selectorMon = monRu;
    }
    if (select_lang.value == 'EN') {
        selectorDay = dayEn;
        selectorMon = monEn;
    }
    if (select_lang.value == 'BE') {
        selectorDay = dayBe;
        selectorMon = monBe;
    }
    date.innerText = `${selectorDay[dat.getDay()]}, ${dat.getDate()} ${selectorMon[dat.getMonth()]}`;
    firstDay.innerHTML = `${selectorDay[dat.getDay() + 1]}`
    secondDay.innerHTML = `${selectorDay[dat.getDay() + 2]}`
    thirDay.innerHTML = `${selectorDay[dat.getDay() + 3]}`


}
userDate(select_lang.value)