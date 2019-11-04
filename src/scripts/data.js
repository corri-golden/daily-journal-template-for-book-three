const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json())
  },


  // Invoke the factory function, passing along the form field values
  // const newJournalEntry = ""

  // Use `fetch` with the POST method to add your entry to your API
  postEntry(newJournalEntry) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry) // changes javascript to json
    })
  }
}
// sending data to post and converting to json.



// .then(response => response.json())   change json to javacript

export default API

