import API from "./data.js"
import renderDom from "./entriesDOM.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()
.then(response => renderDom.renderJournalEntries(response))

// Listen for Submit Button Click
document.querySelector("#recordEntry").addEventListener("click", function(event) {
    })

// Collecting Data from the Input Fields
    const conceptsInputValue = document.querySelector("#conceptsInput").value
    const journalInputValue = document.querySelector("#journalEntry").value

console.log(conceptsInputValue, journalInputValue);


