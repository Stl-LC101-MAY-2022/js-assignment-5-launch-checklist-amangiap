

const { pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");


window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault()
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass");
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
    });

   
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result; 
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, distance, imageUrl, moons)
    })
   
});