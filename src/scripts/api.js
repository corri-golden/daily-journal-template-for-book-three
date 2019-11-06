export default {
    deleteEntry (id) {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    getAllEntry () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}


