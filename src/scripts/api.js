export default {
    deleteEntry (id) {                                                     //function for deleting a single entry
        return fetch(`http://localhost:3000/entries/${id}`, {              //** understand the id passing into the function       
            method: "DELETE"
        })
            .then(response => response.json())
    },
    getAllEntry () {                                                        //function for getting all of the entries again.
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}


