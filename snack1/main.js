'use strict';

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//array oggetti
const bikes = [
    {
        bikeName:'Triban',
        bikeWeight: 10,
    },
    {
        bikeName:'Van Rysel',
        bikeWeight: 9,
    },
    {
        bikeName:'Lobito',
        bikeWeight: 15,
    },
    {
        bikeName:'CBT Italia',
        bikeWeight: 7,
    },

];

let lightestBike = bikes[0];

// ciclo forEach per trovare la bici più leggera
bikes.forEach((bike) =>{
    
    if(bike.bikeWeight < lightestBike.bikeWeight){
        lightestBike = bike;
    }
});
console.log(lightestBike);
// Stampo la bici più leggera a schermo
const { bikeName, bikeWeight} = lightestBike;

let bikeContainer = document.getElementById('container');
bikeContainer.innerHTML = `<div>La bici più leggera è la ${bikeName} che ha un peso di: ${bikeWeight} kg`;

