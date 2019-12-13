import { useWitnesses, getWitnesses } from "./witnessDataProvider.js"
import witnessComponent from "./witness.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer");

export const witnessList = () => {
    const witness = useWitnesses()

    eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id === "showWitnesses") {
        const showWitnesses = new CustomEvent("showWitnessButtonClicked")
        eventHub.dispatchEvent(showWitnesses)
      }
    })
    
    eventHub.addEventListener("showWitnessButtonClicked", event => {
      console.log("button clicked for witnesses")
      getWitnesses().then(
        () => {
          const allTheWitness = useWitnesses()
            render(allTheWitness)
          
        }
      )
    const render = () => {
    contentElement.innerHTML = `
        ${
          witness.map(
            (currentWitness) => {
              return witnessComponent(currentWitness)
            }
          ).join("")
        }
      `}
    })}

