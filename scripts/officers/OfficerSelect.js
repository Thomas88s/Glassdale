
 import { useOfficers, getOfficers } from "./OfficerDataProvider.js"


 const eventHub = document.querySelector(".container")
 const contentTarget = document.querySelector(".filters__crime")

 eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        if(changeEvent.target.id === "OfficerSelect")
         customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer.target.value
            }
        })
        console.log(customEvent)
        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
    .then( () => {
      // Get all officers from application state
      const officers = useOfficers()
      render(officers)
    })
}
    const render = officersCollection => {
        contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
        <option value="0">Please select a crime...</option>
        ${officersCollection.map(cop => {
            const officer = cop.name
            return `<option value="${cop.id}">${officer}</option>`
        })}
            </select>
            `
    }   
    eventHub.addEventListener("crimeChosen", crimeChosenEvent => document.querySelector("#officerSelect").value = 0)