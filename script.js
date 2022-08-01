

// const { pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");


window.addEventListener("load", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault()
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });

   
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanets;
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