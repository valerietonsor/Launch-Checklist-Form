// Write your JavaScript code here!

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
      let pilotInput = document.getElementById("pilotName"); 
      let copilotInput = document.getElementById("copilotName"); 
      let fuelInput = Number(document.getElementById("fuelLevel")); 
      let cargoInput = Number(document.getElementById("cargoMass")); 

      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!"); 
         event.preventDefault();
      }
      // if (isNaN(fuelInput) || isNaN(cargoInput) || !isNaN(copilotInput) || !isNaN(pilotInput)){ 
      //    alert("Make sure to enter valid information for each field!"); 
      //    event.preventDefault(); 
      // }

      let pilotPrint = document.getElementById("pilotStatus"); 
      let copilotPrint = document.getElementById("copilotStatus"); 
      let fuelPrint = document.getElementById("fuelStatus"); 
      let cargoPrint = document.getElementById("cargoStatus"); 
      let print = document.getElementById("faultyItems"); 

      // print.style.visibility = "visible";       
      pilotPrint.innerHTML(`Pilot ${pilotInput.value} is ready.`)
      copilotPrint.innerHTML("This is working.")
   
});
});

 