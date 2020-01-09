let convictions = []

const setConvictions = (crimeArray) => {
    convictions = crimeArray
}

export const useConvictions = () => convictions.sort().slice()

export const getConvictions = () => {
    // Load database state into application state
    return fetch("http://criminals.glassdale.us/crimes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(setConvictions)
}

// let convictions = []

// export const useConvictions = () => {
//   return convictions.
// }

// export const getConvictions = () => {
//   return fetch("http://criminals.glassdale.us/crimes")
//       .then(response => response.json())
//       .then(
//           parsedConvictions => {
//               console.table(parsedConvictions)
//               convictions = parsedConvictions.slice()
//           }
//       )
// }

