// const { getElementError } = require('@testing-library/dom');

// // Write your helper functions here!
// require('isomorphic-fetch');
//pickPlanet
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementByID('missionTarget');
    missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <liNumber of Moons: ${moons}</li>
            <ol>
            <img src='${imageUrl}'>
            `
}

function validateInput(testInput) {
   if (testInput === "") {
    return `Empty`
   } else if (testInput === Number) {
    return `Is a number`
   } else if (isNaN(testInput)) {
    return `Not a number`
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === `Empty` || validateInput(copilot) === `Empty` || validateInput(fuelLevel) === `Empty` || validateInput(cargoLevel) === `Empty`){
    alert('All fields are required');
   } 
   else if (validateInput(fuelLevel) === `Not a number` || validateInput(cargoMass) === `Not a number`) {
    alert('Please enter numerical values for Fuel Level and Cargo Mass');
   } 
   else if (validateInput(pilot) === `Is a number` || validateInput(copilot)=== `Is a number`){
    alert('Please do not enter numerical values for the name of pilot or co-pilot')
   } 
   else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready`
    list.style.visibility = 'hidden';
   }

   if (Number(fuelLevel) < 10000) {
    fuelStatus.innerHTML = `Not enough fuel`;
    list.style.visibility = `visible`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = `red`;
   } else if (Number(cargoLevel) > 10000) {
    cargoStatus.innerHTML = `Cargo too heavy for launch`;
    list.style.visibility = `visible`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = `red`;
   } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
    list.style.visibility = `visible`;
    fuelStatus.innerHTML = `Enough fuel for travel`;
    cargoStatus.innerHTML = `Cargo light enough for takeoff`;
    launchStatus.innerHTML = `Shuttle ready for launch`;
    launchStatus.style.color = `green`;
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
