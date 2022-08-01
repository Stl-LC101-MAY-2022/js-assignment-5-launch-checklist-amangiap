

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

   

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result; 
   }).then(function () {
       console.log(listedPlanets);
       
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })
   
});