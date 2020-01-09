import { useCriminals, getCriminalsByOfficer } from "./CriminalProvider.js"
import { getCriminalsByCrime } from "./CriminalProvider.js"
import Criminal from "./Criminal.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

const CriminalList = () => {
    // Load the application state to be used by this component
    const appStateCriminals = useCriminals()

    eventHub.addEventListener("showNoteButtonClicked", event => {
        render([])
    })

    // What should happen when detective selects a crime?
    eventHub.addEventListener("filterClicked", event => {
        const crimeName = event.detail.crime
        const officerName = event.detail.officer

        const filteredCriminals = appStateCriminals.filter(
            (individualCriminal) => {
                if (individualCriminal.conviction === crimeName) {
                    return individualCriminal
                }
            }
        )
        .filter(criminal => {
            if (criminal.arrestingOfficer === officerName) {
                return criminal
            }
        })

        render(filteredCriminals)
    })

    // What should happen when detective clicks on a crime in the <select> element?
    // eventHub.addEventListener('officerSelected', event => {
    //     if ("officerName" in event.detail) {
    //         if (event.detail.officerName === "0") {
    //             render(appStateCriminals)
    //         } else {
    //             const filteredCriminals = getCriminalsByOfficer(event.detail.officerName)
    //             render(filteredCriminals)
    //         }
    //     }
    // })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("associates--")) {

            const [prefix, id] = clickEvent.target.id.split("--")

            const message = new CustomEvent("associateButtonClicked", {
                detail: {
                    criminalId: id
                }
            })
            eventHub.dispatchEvent(message)
        }
        else if (clickEvent.target.id.startsWith("closeDialog")) {
                  const dialogElement = clickEvent.target.parentNode 
                  dialogElement.close()
                  
                }
    })

    // Function that handles rendering of the HTML representation of the application state
    const render = criminals => {
        contentTarget.innerHTML = `
            <article class="criminalComponent">
                <div class="criminals">
                    ${
                        criminals.map(currentCriminalObject => {
                            const criminalHTML = Criminal(currentCriminalObject)
                            return criminalHTML
                        }).join("")
                    }
                </div>
            </article>
        `
    }

    render(appStateCriminals)
}

export default CriminalList

// import { useCriminals, getCriminals } from "./CriminalProvider.js";
// import CriminalComponent from "./Criminal.js";

// const eventHub = document.querySelector(".container");
// const contentElement = document.querySelector(".criminalsContainer");

// export const CriminalList = () => {
//   // Load the application state to be used by this component
//   const criminalCollection = useCriminals();

//   // What should happen when detective selects a crime?
//   eventHub.addEventListener("crimeSelected", event => {
//     // You remembered to add the id of the crime to the event detail, right?
//     if ("crime" in event.detail) {
//       /*
//                 Filter the criminals application state down to the people that committed the crime
//             */
//       let crime = event.detail.crime
//       const matchingCriminals = criminalCollection.filter(currentCriminal => {
//         if (currentCriminal.conviction === crime) {
//           return currentCriminal;
//         }
//       });
//       if(matchingCriminals.length === 0) {
//         render(criminalCollection)
//       }
//       else {render(matchingCriminals)};
//     }
//   });
  
//   eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "showCriminals") {
//       const showCriminals = new CustomEvent("showCriminalsButtonClicked")
//       eventHub.dispatchEvent(showCriminals)
//     }
//   })

//   eventHub.addEventListener("showCriminalsButtonClicked", event => {
//     console.log("button clicked for Criminals")
//     render(criminalCollection)
//   })

//   // custom event for showing alibies
//   eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id.startsWith("associates--")) {

//         const [prefix, id] = clickEvent.target.id.split("--")

//         const message = new CustomEvent("associateButtonClicked", {
//             detail: {
//                 criminalId: id
//             }
//         })
//         eventHub.dispatchEvent(message)
//     }
//     else if (clickEvent.target.id.startsWith("closeDialog")) {
//       const dialogElement = clickEvent.target.parentNode 
//       dialogElement.close()
      
//     }
// })

//   let render = criminalCollection => {
//     contentElement.innerHTML = ""
//     contentElement.innerHTML += `
//       ${criminalCollection
//         .map(currentCriminal => {
//           return CriminalComponent(currentCriminal);
//         })
//         .join("")}`;
//   };
//   render(criminalCollection);
// };

// // import { useCriminals } from "./CriminalProvider.js";
// // import CriminalComponent from "./Criminal.js";

// // console.log("criminal list module")

// // const contentElement = document.querySelector(".CriminalsList")

// // const CriminalListComponent = () => {
// //   const criminal = useCriminals()

// //   contentElement.innerHTML += `
// //       ${
// //         criminal.map(
// //           (currentCriminal) => {
// //             return CriminalComponent(currentCriminal)
// //           }
// //         ).join("")
// //       }
// //     `
// // }

// // export default CriminalListComponent
