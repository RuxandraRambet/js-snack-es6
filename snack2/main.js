'use strict';

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// array oggeti squadre
const teams = [
    {
        teamName:'Roma',
        points: 0,
        faults: 0
    },
    {
        teamName:'Lazio',
        points: 0,
        faults: 0
    },
    {
        teamName:'Juventus',
        points: 0,
        faults: 0
    },
    {
        teamName:'Inter',
        points: 0,
        faults: 0 
    },

];
// funzione che genera numeri random 
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Ciclo forEach per generare nr random per le proprietà punti e falli
teams.forEach((team) =>{
    team.points = randomNumber(0, 50);
    team.faults = randomNumber(0, 50);
});
// nuovo array con nomi e falli
const teamNamesAndFaults = teams.map(({ teamName, faults }) => ({ teamName, faults }));

// Console log di tutto
console.log("Squadre: ", teams);
console.log("Nomi e Falli: ", teamNamesAndFaults);