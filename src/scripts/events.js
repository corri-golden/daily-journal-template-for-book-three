

export default {
    registerDeleteListener () {
        let storedEntries = document.querySelector(".entryLog")
        console.log(storedEntries)
        storedEntries.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteButton--")) {
                // Extract recipe id from the button's id attribute
                const entryIDToDelete = event.target.id.split("--")[1]
                console.log(entriesToDelete)

                // Invoke the delete method, then get all recipes and render them
                API.deleteRecipe(recipeToDelete)
                    .then(API.getJournalEntries)
                    .then(render)
            }
        })
    }
}

