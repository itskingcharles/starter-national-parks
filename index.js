/*First button 
const firstBtn = document.querySelector("button");

//First event listner function
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
});
*/
//Second button - select all the buttons for all of the parks
const allBtns = document.querySelectorAll(".rate-button");

//Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target.parentNode);
    })
})