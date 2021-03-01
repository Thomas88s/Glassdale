
let crimes = []

export const useConvictions =() => crimes.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(convictionsArray =>
                 crimes = convictionsArray)
}

