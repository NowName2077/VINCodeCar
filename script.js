import {VINData} from "./VINCode.mjs";

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('search-vin').addEventListener('click', () => {
        const vin = document.getElementById('vin-input').value.trim().toUpperCase();

        const car = VINData.find(v => v.id === vin);


        if (car)
        {
            document.getElementById('vin').textContent = car.id;
            console.log(car.id);

            document.getElementById('manufacturer').textContent = car.name;
            console.log(car.name);

            document.getElementById('country').textContent = car.country;
            console.log(car.country);

            document.getElementById('year').textContent = car.year;
            console.log(car.year);

            document.getElementById('model').textContent = car.model;
            console.log(car.model);

            document.getElementById('color').textContent = car.color;
            console.log(car.color);

            document.getElementById('engineType').textContent = car.engineType;
            console.log(car.engineType);

            document.getElementById('transmission').textContent = car.transmission;
            console.log(car.transmission);

            document.getElementById('fuelType').textContent = car.fuelType;
            console.log(car.fuelType);

            document.getElementById('driveType').textContent = car.driveType;
            console.log(car.driveType);
        }
    })
})