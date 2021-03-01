
  import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
  import { Criminal } from "./Criminal.js"
  import { useConvictions} from "./../convictions/ConvictionProvider.js"
//   import { useOfficers, getOfficers } from "../officers/OfficerDataProvider.js"


   const eventHub = document.querySelector(".container")
   const criminalsContainer = 
   document.querySelector(".criminalsContainer")

   const renderToDom = (criminalCollection) => {
       let criminalsHTMLRepresentations = ""

       for (const criminal of criminalCollection) {
           criminalsHTMLRepresentations += Criminal(criminal)
       }

            criminalsContainer.innerHTML = `
            <h3>Criminals</h3>
            <section class="criminalList">
            ${criminalsHTMLRepresentations}
            </section>`

   }

   export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            renderToDom(criminalArray)
        })
   }

   eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
       if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
        const criminalArray = useCriminals()
        const convictionsArray = useConvictions()

        const chosenConvictionObject = 
        convictionsArray.find(convictionObj => {
            
            return convictionObj.id ===
            parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
        })
        console.log(chosenConvictionObject.name)

        const filteredCriminalsArray = 
        criminalArray.filter(criminalObj => criminalObj.conviction ===
            chosenConvictionObject.name)

            renderToDom(filteredCriminalsArray)
       }
   })

//    export const OfficerList = () => {

//     getOfficers()
//         .then(() => {
//             const officerArray = useOfficers()
//             renderToDom(officerArray)
//         })
//    }

//    eventHub.addEventListener("officerSelect", officerChosenEvent => {
//     // How can you access the officer name that was selected by the user?
//     if (officerChosenEvent.detail.copThatWasChosen !== "0") {
//     const officerName = useOfficers()

//         return officerName.name ===
//         parseInt(officerChosenEvent.detail.copThatWasChosen)
//     }

//     // How can you get the criminals that were arrested by that officer?
//     const criminals = useCriminals()
//     criminals.find(
//         criminalObject => {
//             if (criminalObject.arrestingOfficer === officerName) {
//                 return true
//             }
//         }
//     )
// })