// main.js
import { getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalsList.js'
import ConvictionSelect from './convictions/ConvictionsSelect.js'
import { getConvictions } from './convictions/ConvictionsProvider.js'
import NoteFormComponent from './notes/noteForm.js'
import { getNotes } from './notes/notesDataProvider.js'
import { noteListComponent } from './notes/noteList.js'
import DialogComponent from './dialog/dialog.js'
import { getWitnesses } from './witnesses/witnessDataProvider.js'
import { witnessList } from './witnesses/witnessList.js'

NoteFormComponent()
DialogComponent()
getNotes().then(
  () => noteListComponent()
)
getCriminals().then(
  () => CriminalList()
)
getConvictions().then(
  () => ConvictionSelect()
)
getWitnesses().then(
  () => witnessList()
)

