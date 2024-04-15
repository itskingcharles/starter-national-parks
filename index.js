//First button 
const firstBtn = document.querySelector("button");

//First event listner function
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
});

//Second button - select all the buttons for all of the parks
const allBtns = document.querySelectorAll(".rate-button");

//Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const park = console.log(event.target.parentNode);
        park.style.backgroundColor = "c8e6c9";
    });
});

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
/*nameSorter.addEventListener("click", (event) => {
  console.log("You clicked the name sorter");
});

nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("You clicked the name sorter");
  });
*/

nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main element
    main.innerHTML = "";
  

// 4. Create an array
const parksArray = Array.from(parksList);

// 5. Sort the array
parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

 // 6. Insert each park into the DOM
 parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");