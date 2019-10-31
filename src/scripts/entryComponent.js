import renderDom from "./entriesDOM.js"



const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section>
        <h3>${journalEntry.concepts}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
      </section>
    `
  },  // created a factory function for the object of creating a journal.
  createJournalObj(date, concept, entry, mood) {
    return {
      "date": date,
      "concepts": concept,
      "entry": entry,
      "mood": mood
    }
  }
}


export default entryManager