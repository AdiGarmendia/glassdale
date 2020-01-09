import { getCriminals } from "./Criminal/CriminalProvider.js"
import { getConvictions } from "./convictions/ConvictionsProvider.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import { getNotes } from "./notes/NoteProvider.js"
import CriminalList from "./Criminal/CriminalsList.js"
import ConvictionSelect from "./convictions/ConvictionsSelect.js"
import OfficerSelect from "./officers/OfficerSelect.js"
import NoteFormComponent from "./notes/NoteForm.js"
import NoteListComponent from "./notes/NotesList.js"
import DialogComponent from "./dialog/Dialog.js"
import FilterButton from "./filters/Filters.js"

const loadData = () => {
    return getConvictions()
        .then(getNotes)
        .then(getCriminals)
        .then(getOfficers)
}

const renderInitialComponents = () => {
    ConvictionSelect()
    OfficerSelect()
    FilterButton()
    NoteFormComponent()
    NoteListComponent()
    CriminalList()
    DialogComponent()
}


loadData().then(renderInitialComponents)


// import { getCriminals } from './criminals/CriminalProvider.js'
// import { CriminalList } from './criminals/CriminalsList.js'
// import ConvictionSelect from './convictions/ConvictionsSelect.js'
// import { getConvictions } from './convictions/ConvictionsProvider.js'
// import NoteFormComponent from './notes/noteForm.js'
// import { getNotes } from './notes/notesDataProvider.js'
// import { noteListComponent } from './notes/noteList.js'
// import DialogComponent from './dialog/dialog.js'
// import { getWitnesses } from './witnesses/witnessDataProvider.js'
// import { witnessList } from './witnesses/witnessList.js'

// NoteFormComponent()
// DialogComponent()
// getNotes().then(
//   () => noteListComponent()
// )
// getCriminals().then(
//   () => CriminalList()
// )
// getConvictions().then(
//   () => ConvictionSelect()
// )
// getWitnesses().then(
//   () => witnessList()
// )

