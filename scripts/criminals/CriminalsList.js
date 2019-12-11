import { useCriminals } from "./CriminalProvider.js";
import CriminalComponent from "./Criminal.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".criminalsContainer");

export const CriminalList = () => {
  // Load the application state to be used by this component
  const criminalCollection = useCriminals();

  // What should happen when detective selects a crime?
  eventHub.addEventListener("crimeSelected", event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crime" in event.detail) {
      /*
                Filter the criminals application state down to the people that committed the crime
            */
      let crime = event.detail.crime
      const matchingCriminals = criminalCollection.filter(currentCriminal => {
        if (currentCriminal.conviction === crime) {
          return currentCriminal;
        }
      });
      if(matchingCriminals.length === 0) {
        render(criminalCollection)
      }
      else {render(matchingCriminals)};
    }
  });

  let render = criminalCollection => {
    contentElement.innerHTML = ""
    contentElement.innerHTML += `
      ${criminalCollection
        .map(currentCriminal => {
          return CriminalComponent(currentCriminal);
        })
        .join("")}`;
  };
  render(criminalCollection);
};

// import { useCriminals } from "./CriminalProvider.js";
// import CriminalComponent from "./Criminal.js";

// console.log("criminal list module")

// const contentElement = document.querySelector(".CriminalsList")

// const CriminalListComponent = () => {
//   const criminal = useCriminals()

//   contentElement.innerHTML += `
//       ${
//         criminal.map(
//           (currentCriminal) => {
//             return CriminalComponent(currentCriminal)
//           }
//         ).join("")
//       }
//     `
// }

// export default CriminalListComponent
