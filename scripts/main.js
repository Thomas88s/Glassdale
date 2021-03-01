console.log("Welcome to the main module")
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerList } from "./officers/OfficerList.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { NoteForm } from "./notes/noteForm.js"
// import { OfficerSelect } from "./officers/OfficerSelect.js"
// import { ShowNoteButton } from scripts/notes/ShowNotesButton.js



OfficerList()
CriminalList()
ConvictionSelect()
// OfficerSelect()
NoteForm()
// ShowNoteButton()