let criminals = []

const setCriminals = criminalArray => criminals = criminalArray.splice(0)

export const getCriminalsByCrime = crime => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.conviction.toLowerCase() === crime.toLowerCase()) {
            return true
        }
        return false
    })
}

export const getCriminalsByOfficer = officerName => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.arrestingOfficer.toLowerCase() === officerName.toLowerCase()) {
            return true
        }
        return false
    })
}

export const useCriminals = () => criminals.slice()
export const getCriminals = () => {
    // Load database state into application state
    return fetch("http://criminals.glassdale.us/criminals", {
        method: "GET"
    })
        .then(response => response.json())
        .then(setCriminals)
}


// let criminals = []

// export const useCriminals = () => {
//   return criminals
// }

// export const getCriminals = () => {
//   return fetch("http://criminals.glassdale.us/criminals")
//       .then(response => response.json())
//       .then(
//           parsedCriminals => {
//               console.table(parsedCriminals)
//               criminals = parsedCriminals.slice()
//           }
//       )
// }

