
  export const Officer = (officerObj) => {
      return `
        <div class= "officer">
        <p class="officerCard__id">ID: ${officerObj.id}</p>      
        <p class="officerCard__name">Name: ${officerObj.name}</p>  
        </div>    
        `
  }