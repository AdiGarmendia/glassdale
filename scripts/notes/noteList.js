import { saveNote, useNotes, getNotes } from "./notesDataProvider.js"
import notesComponent from "./note.js";

const eventHub = document.querySelector(".container")

export const noteListComponent = () => {
  let noteCollection = useNotes()

  eventHub.addEventListener("noteSaved", event => {
    console.log(event.detail)
    saveNote(event.detail)
    render(noteCollection)
  })
  eventHub.addEventListener("showNotesButtonClicked", event => {
    getNotes().then(
      () => {
        const allTheNotes = useNotes()
          render(allTheNotes)
        
      }
    )
  })

  let render = noteCollection => {
   const contentElement = document.querySelector(".noteContainer")
    contentElement.innerHTML = `
      ${noteCollection
        .map(currentNote => {
          return notesComponent(currentNote);
        })
        .join("")}`;
  };
  // render(noteCollection)
};