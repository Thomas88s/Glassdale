
export const Criminal = (criminalObj) => {
    return `
     <div class="criminal">
     <p class="criminalCard__name">Name: ${criminalObj.name}</p>
     <p class="criminalCard__age">Age: ${criminalObj.age}</p>
     <p class="criminalCard__conviction">Conviction:
      ${criminalObj.conviction}</p>
     <p class="criminalCard__dateOfIncarceration">
     Date of Incarceration: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>  
     <p class="criminalCard__dateOfRelease">
     Scheduled Release Date: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>  
     </div>
         `
}