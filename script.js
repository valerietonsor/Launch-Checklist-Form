// Write your JavaScript code here!

// const { type } = require("os");

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      let spacesFilled; 
      let valueTypes; 
      let pilotInput = document.getElementById("pilotName"); 
      let copilotInput = document.getElementById("copilotName"); 
      let fuelInput = document.getElementById("fuelLevel"); 
      let cargoInput = document.getElementById("cargoMass");
      let cargoNumber = Number(cargoInput.value); 
      let fuelNumber = Number(fuelInput.value); 
 

      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!"); 
      }
      else { 
         spacesFilled = true; 
          }  
          
      if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value) || isNaN(cargoInput.value) || isNaN(fuelInput.value)){ 
         alert("Not valid values.")
         
      }
      else { 
         valueTypes = true; 
      }

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then( function(json) {
            
            let fetchData = document.getElementById("missionTarget"); 
            let obj = json[Math.floor(Math.random()*json.length)];
            fetchData.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                   <li>Name: ${obj.name}</li>
                   <li>Diameter: ${obj.diameter}</li>
                   <li>Star: ${obj.star}</li>
                   <li>Distance from Earth: ${obj.distance}</li>
                   <li>Number of Moons: ${obj.moons}</li>
                </ol>
                <img src="${obj.image}">
            `; 
   });
   });


      let print = document.getElementById("faultyItems"); 
      let launchPrint = document.getElementById("launchStatus"); 
      let pilotPrint = document.getElementById("pilotStatus"); 
      let copilotPrint =  document.getElementById("copilotStatus"); 
      let fuelPrint = document.getElementById("fuelStatus"); 
      let cargoPrint = document.getElementById("cargoStatus"); 
      
      if (spacesFilled && valueTypes) { 
         print.style.visibility = "visible";   
         pilotPrint.innerHTML = `Pilot ${pilotInput.value} is ready.`; 
         copilotPrint.innerHTML =`Co-Pilot ${copilotInput.value} is ready.`; 

         if (fuelNumber < 10000){ 
         fuelPrint.innerHTML = `Fuel level is too low!`; 
         launchPrint.innerHTML = `Shuttle not ready for launch!`; 
         launchPrint.style.color = "red"; 
      }
         if (cargoNumber > 10000){ 
         cargoPrint.innerHTML = `Cargo is too heavy!`; 
         launchPrint.innerHTML =`Shuttle not ready for launch!`; 
         launchPrint.style.color = "red"; 
      }

         if (fuelNumber >= 10000 && cargoNumber <= 10000){ 
         launchPrint.innerHTML = `Shuttle is ready for launch!`;  
         launchPrint.style.color = "green"; 
         
      }
   
   }


});
});

 