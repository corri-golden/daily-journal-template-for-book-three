import API from "./data.js"
import dEntry from "./api.js"
import renderDom from "./entriesDOM.js"


export default {
    registerDeleteListener() {
        let storedEntries = document.querySelector(".entryLog")
        console.log(storedEntries)
        storedEntries.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteButton--")) {
                // Extract delete id from the button's id attribute
                const entryIDToDelete = event.target.id.split("--")[1]
                console.log(entryIDToDelete)

                // Invoke the delete method, then get all recipes and render them
                dEntry.deleteEntry(entryIDToDelete)
                    .then(API.getJournalEntries)
                    .then(response => renderDom.renderJournalEntries(response))
            }
        })
    }
}

