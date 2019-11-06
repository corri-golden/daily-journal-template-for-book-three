import API from "./data.js"
import renderDom from "./entriesDOM.js"
import entryManager from "./entryComponent.js"
import events from "./events.js"
import journalEntries from "./api.js"


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))

// Listen for Submit Button Click.  Rgex is not fully functional.  
// document.querySelector("#recordEntry").addEventListener("click", function (event) {
//     event.preventDefault()
//     const conceptsInputValue = document.querySelector("#conceptsInput").value
//     const journalInputValue = document.querySelector("#journalEntry").value
//     const rgex = /[a-zA-z0-9\(\)\{\}\:\;]/
//     // console.log(conceptsInputValue, journalInputValue);
//     if (conceptsInputValue === "" && journalInputValue === "") {
//         alert('Please enter Value');
//         // } else (conceptsInputValue === rgex && journalInputValue === rgex)
//     })

// Collecting Data from the Input Fields
// const conceptsInputValue = document.querySelector("#conceptsInput").value
// const journalInputValue = document.querySelector("#journalEntry").value




//targeting the html elements with input
// created newJournalEntries var and set it value to the factory function in entryComponent
// const newJournalEntries = entryManager.createJournalObj(
//     document.querySelector("#dateInput").value,
//     document.querySelector("#conceptsInput").value,
//     document.querySelector("#journalEntry").value,
//     document.querySelector("#moodInput").value,
// )

// creates an event listener that listens out for the click that contains the user's info.  
// By calling the object passed into the call it goes up to where the variable was created asking
// what it is.  Then it parse the info by adding the value in each input
document.querySelector("#recordEntry").addEventListener("click", function () {
    const newJournalEntries = entryManager.createJournalObj(
        document.querySelector("#dateInput").value,
        document.querySelector("#conceptsInput").value,
        document.querySelector("#journalEntry").value,
        document.querySelector("#moodInput").value,
    )
    console.log(newJournalEntries);
    API.postEntry(newJournalEntries)
    .then(API.getJournalEntries).then(renderDom.renderJournalEntries)
})
//get the data from API then put on DOM
// querySelector to target all the classes.  Use forEach to loop through the buttons.  Naming each item in the array button.    
document.querySelectorAll(".radioButton").forEach(button => {
    button.addEventListener("click", function () {
    console.log(button.value)           // console logging the value of each button
    API.getJournalEntries()             // get data and call
        .then(entries => {         // response default name for data.  I changed it to entries
        let temporaryStorage = []                            // console.log(entries)
        entries.forEach(entry => {
            if (entry.mood === button.value) {                // going through the to check the mood on each item. 
                temporaryStorage.push(entry)              // .push putts the data in the temporarybutton
            }
        }) 
        renderDom.renderJournalEntries(temporaryStorage)          //putting the data onto the DOM         
    })                          // happens next
})
})



// testing to see if the postEntry function works
// passed the created newJournalEntries inside the call
// API.postEntry(newJournalEntries);




// --------------- Journal 3 delete----------------------------------------------
// Invoke the method that attaches the event listener
events.registerDeleteListener()

// Get all recipes from API and render them in the DOM
API.getJournalEntries().then()


