import { maps } from "../logicAPP/logicAPP";
const tet = [];
export function positionUser(parm) {

    const loc = navigator.geolocation;
    loc.getCurrentPosition(success, failure);

    function success(position) {
        let mylat = position.coords.latitude;
        let mylong = position.coords.longitude;
        parm.push(mylong);
        parm.push(mylat)
        maps(tet[0], tet[1]);
    }


    function failure(params) {
        alert('You did not give access to the location,please give app access to location')
    }
}
positionUser(tet)