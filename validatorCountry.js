import {VINData} from "./VINCode.mjs";
const getCountryPercentage = (country, data) => {
    const total = data.length;
    const count = data.filter(x => x.country === country).length;
    return count / total;
};

const mapResponse = await fetch('world.svg');
if (!mapResponse.ok) {
    throw new Error('Не удалось загрузить карту мира');
}
const mapSvg = await mapResponse.text();
const mapWorld = document.querySelector('.mapWorld');

mapWorld.innerHTML = mapSvg;

mapWorld.querySelectorAll('path').forEach(path => {
    const pathId = path.getAttribute('id');
    path.style.fill = `rgb(0, 170, 200,${getCountryPercentage(pathId,VINData)})`

});
