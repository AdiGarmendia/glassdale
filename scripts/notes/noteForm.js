// import { saveNote } from "./notesDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
  const newNote = new CustomEvent("noteSaved", {
    detail: {
      suspect: document.querySelector("#note-criminal").value,
      date: document.querySelector("#note-date").value,
      text: document.querySelector("#note-text").value
    }
  })
  eventHub.dispatchEvent(newNote)
}}
)
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "showNotes") {
    const showNotes = new CustomEvent("showNotesButtonClicked")
    eventHub.dispatchEvent(showNotes)
  }
})
const NoteFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `
          <div class="note__field">
          Date: <input type="date" id="note-date" />
          </div>
          <div class="note__field">
          Criminl: <input type="text" id="note-criminal" />
          </div>
          <div class="note__field">
            Note: <textarea type="text" id="note-text" cols="30" rows="3"></textarea>
          </div>
          <div class="note__buttons">
          <button class="note__field" id="saveNote">Save Note</button>
          <button class="note__field" id="showNotes">Show Notes</button>
          </div>
          `
    }

    render()
}

export default NoteFormComponent