import { useCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".alibiContainer");

const DialogComponent = () => {
  // listening for event from CriminalsList.js
  eventHub.addEventListener("associateButtonClicked", event => {
    const criminals = useCriminals();
    console.log(event.detail.criminalId);

    //  extracts objects from array
    const foundCriminal = criminals.find(singleCriminal => {
      // parseInt with 10 converts the string id to a number
      return singleCriminal.id === parseInt(event.detail.criminalId, 10);
    });

    const alibisHTML = foundCriminal.known_associates
      .map(singleAssociate => {
        return `
                  <div>
                      ${singleAssociate.name}: ${singleAssociate.alibi}
                  </div>
              `;
      })
      .join("");

    document.querySelector(".alibi__text").innerHTML = alibisHTML;
    document.querySelector(".alibies").showModal();
  });
  
  
  const render = () => {
    contentTarget.innerHTML = `
    <dialog class="alibies">
    <div class="alibi__text"></div>
    <button id="closeDialog">Nope</button>
    </dialog>
    `;
  };
  
  render();
};


export default DialogComponent;
