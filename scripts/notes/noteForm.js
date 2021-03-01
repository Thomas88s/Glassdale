import { saveNote } from "./noteProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        
        <label for="note-suspect">Suspect: </label>
        <input type="text" id="note-suspect"></input>
        <label for="note-text">Author: </label>
        <input type="text" id="note-author"></input>
        <label for="note-">Date: </label>
        <input for="text" id="note-date"></input>
        <label for="note-suspect">intuition: </label>
        <input type="text" id="note-intuition"></input>
        <label for="note-suspect">Text: </label>
        <input type="text" id="note-text"></input>

        <button type="button" id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

 // Handle browser-generated click event in component
 eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
        
        const suspect = document.querySelector("#note-suspect").value
        const author = document.querySelector("#note-author").value
        const date = document.querySelector("#note-date").value
        const intuition = document.querySelector("#note-intuition").value
        const text = document.querySelector("#note-text").value
            
        const newNote = {

            "text" : text,
            "suspect" : suspect,
            "date" : date,
            "author" : author,
            "intuition" : intuition,
        }

        saveNote(newNote)
  
}
 })

