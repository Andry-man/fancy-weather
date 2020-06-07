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
        0: 'Sunday',
        1: 'Monday',
        2: 'Tueday',
        3: 'Wedday',
        4: 'Thuday',
        5: 'Friday',
        6: 'Satday',
    }
    const dayRu = {
        0: 'Воскресенье',
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
    }
    const dayBe = {
        0: 'Нядзеля',
        1: 'Панядзелак',
        2: 'Аўторак',
        3: 'Серада',
        4: 'Чацвер',
        5: 'Пятнiца',
        6: 'Субота',
    }
    const monEn = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December',
    }
    const monRu = {
        0: 'Январь',
        1: 'Февраль',
        2: 'Март',
        3: 'Апрель',
        4: 'Май',
        5: 'Июнь',
        6: 'Июль',
        7: 'Август',
        8: 'Сенябрь',
        9: 'Октябрь',
        10: 'Ноябрь',
        11: 'Декабрь',
    }
    const monBe = {
        0: 'Студзень',
        1: 'Люты',
        2: 'Сакавiк',
        3: 'Красавiк',
        4: 'Май',
        5: 'Чэрвень',
        6: 'Лiпень',
        7: 'Жнiвень',
        8: 'Верасень',
        9: 'Кастрычнiк',
        10: 'Лiстапад',
        11: 'Снежань',
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
    secondDay.innerHTML = `${selectorDay[dat.getDay() +2]}`
    thirDay.innerHTML = `${selectorDay[dat.getDay() - 4]}`


}
userDate(select_lang.value)