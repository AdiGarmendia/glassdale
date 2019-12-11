/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
import { useConvictions } from "./ConvictionsProvider.js"

const eventHub = document.querySelector(".container")
 const convictionsListContainer = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    const convictions = useConvictions()

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropdown")) {
            const selectedCrime = changeEvent.target.value

            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crime: selectedCrime
                }
            })

            eventHub.dispatchEvent(message)
        }
    })
    //     On the Event Hub, listen for a "change" event. Remember to write
    //     an `if` condition to make sure that it was the `#crimeSelect`
    //     element that changed.

    //     When that event happens, dispatch a custom message to your Event
    //     Hub so that the criminal list can listen for it and change what
    //     it renders.
    // */
    

    const render = convictionsCollection => {
        convictionsListContainer.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                  convictionsCollection.sort().map(conviction =>
                  `<option>${conviction}</option>`
                  )
                  }
            </select>
        `
    }

    render(convictions)
}

/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
// import { useConvictions } from "./ConvictionsProvider.js"

// // Get a reference to the DOM element where the <select> will be rendered
// const contentTarget = document.querySelector(".filters__crime")

// const ConvictionSelect = () => {
//     // Get all convictions from application state
//     const convictions = useConvictions()
    
//     const convictionsListContainer = document.querySelector(".filters__crime")
//     const render = convictionsCollection => {

//       convictionsListContainer.innerHTML += `
//         <select class="dropdown" id="crimeSelect">
//                 <option value="0">Please select a crime...</option>
//                 ${
//               convictions.map(conviction =>
//                   `<option>${conviction}</option>`
//               )
//           }

//             </select>
//         `
//     }

//     render(convictions)
// }

export default ConvictionSelect