import API from "./data.js"
import dEntry from "./api.js"
import renderDom from "./entriesDOM.js"


export default {
    registerDeleteListener() {                             //creating a function for delete Listener
        let storedEntries = document.querySelector(".entryLog")        //targeting the class from HMTL.
        console.log(storedEntries)
        storedEntries.addEventListener("click", event => {                //using a method to add eventListener
            if (event.target.id.startsWith("deleteButton--")) {           //condition for if the startswith ***
                // Extract delete id from the button's id attribute
                const entryIDToDelete = event.target.id.split("--")[1]       //using the split method which I need to study ***
                console.log(entryIDToDelete)

                // Invoke the delete method, then get all recipes and render them
                dEntry.deleteEntry(entryIDToDelete)              //performing the the delete entry function on from API
                    .then(API.getJournalEntries)                 //get the non deleted journal entries 
                    .then(response => renderDom.renderJournalEntries(response))     //render them to the DOM.  this is the same that was rendered in entriesDOM
            }
        })
    }
}

