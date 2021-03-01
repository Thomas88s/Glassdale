
    import { useConvictions, getConvictions } from "./ConvictionProvider.js"
   
   
    
   
    const eventHub = document.querySelector(".container")
    const contentTarget = document.querySelector(".filters__crime")

    eventHub.addEventListener("change", changeEvent =>{
        if(changeEvent.target.id === "crimeSelect") {
            const customEvent = new CustomEvent("crimeChosen", {
                detail: {
                    crimeThatWasChosen: changeEvent.target.value
                }
            })
            console.log(customEvent)
            eventHub.dispatchEvent(customEvent)
        }
    })

export const ConvictionSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getConvictions()
    .then( () => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${convictionsCollection.map(crime => {
        const conviction = crime.name
        return `<option value="${crime.id}">${conviction}</option>`
    })}
    </select>
    `
}
eventHub.addEventListener("officerSelected", crimeChosenEvent => document.querySelector("#crimeSelect").value = 0)




    
    