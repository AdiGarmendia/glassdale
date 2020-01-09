import { saveNote, getNotes, useNotes, editNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")


const NoteFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const noteToBeEdited = event.detail.noteId

        const allNotesArray = useNotes()

        const theFoundedNote = allNotesArray.find(
            (currentNoteObject) => {
                return currentNoteObject.id === parseInt(noteToBeEdited, 10)
            }
        )

        document.querySelector("#note-id").value = theFoundedNote.id
        document.querySelector("#note-text").value = theFoundedNote.text
        document.querySelector("#note-criminal").value = theFoundedNote.suspect
    })

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
            // Does the hidden input field have a value?
            const hiddenInputValue = document.querySelector("#note-id").value

            // If so, edit the note with a PUT operation
            if (hiddenInputValue !== "") {
                const editedNote = {
                    id: parseInt(document.querySelector("#note-id").value, 10),
                    text: document.querySelector("#note-text").value,
                    suspect: document.querySelector("#note-criminal").value,
                    date: Date.now()
                }

                editNote(editedNote).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
                })
            } else {
                // Else, save the notes with a POST operation
                const newNote = {
                    text: document.querySelector("#note-text").value,
                    suspect: document.querySelector("#note-criminal").value,
                    date: Date.now()
                }

                saveNote(newNote).then(
                    () => {
                        const message = new CustomEvent("noteCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showNotes") {
            const message = new CustomEvent("showNoteButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary>Case Notes</summary>
                <input type="hidden" id="note-id" />
                <div class="note__field">
                    Note: <input type="text" id="note-text" />
                </div>
                <div class="note__field">
                    Criminal: <input type="text" id="note-criminal" />
                </div>
                <button class="note__field" id="saveNote">Save Note</button>
                <button class="note__field" id="showNotes">Show Notes</button>
            </details>
        `
    }

    render()
}

export default NoteFormComponent

// // import { saveNote } from "./notesDataProvider.js"

// const contentTarget = document.querySelector(".noteFormContainer")
// const eventHub = document.querySelector(".container")

// eventHub.addEventListener("click", clickEvent => {
//   if (clickEvent.target.id === "saveNote") {
//   const newNote = new CustomEvent("noteSaved", {
//     detail: {
//       suspect: document.querySelector("#note-criminal").value,
//       date: document.querySelector("#note-date").value,
//       text: document.querySelector("#note-text").value
//     }
//   })
//   eventHub.dispatchEvent(newNote)
// }}
// )
// eventHub.addEventListener("click", clickEvent => {
//   if (clickEvent.target.id === "showNotes") {
//     const showNotes = new CustomEvent("showNotesButtonClicked")
//     eventHub.dispatchEvent(showNotes)
//   }
// })
// const NoteFormComponent = () => {
//     const render = () => {
//         contentTarget.innerHTML = `
//           <div class="note__field">
//           Date: <input type="date" id="note-date" />
//           </div>
//           <div class="note__field">
//           Criminl: <input type="text" id="note-criminal" />
//           </div>
//           <div class="note__field">
//             Note: <textarea type="text" id="note-text" cols="30" rows="3"></textarea>
//           </div>
//           <div class="note__buttons">
//           <button class="note__field" id="saveNote">Save Note</button>
//           <button class="note__field" id="showNotes">Show Notes</button>
//           </div>
//           `
//     }

//     render()
// }

// export default NoteFormComponent