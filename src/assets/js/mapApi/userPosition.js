import { maps } from "../logicAPP/logicAPP";
import { latitude, longitude, zoom, spinner } from "../idContentHtml/idContentHtml";

const tet = [];
export function positionUser(parm) {

    const loc = navigator.geolocation;
    loc.getCurrentPosition(success, failure);

    function success(position) {
        let mylat = position.coords.latitude;
        let mylong = position.coords.longitude;
        parm.push(mylong);
        parm.push(mylat)
        spinner.className = 'spinner'

        maps(tet[0], tet[1], zoom.value);
        latitude.innerHTML = `${mylat}`;
        longitude.innerHTML = `${mylong}`;
    }


    function failure(params) {
        alert('You did not give access to the location,please give app access to location')
    }
}
positionUser(tet)