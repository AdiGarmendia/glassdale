const Criminal = criminal => `
        <section class="criminal">
            <header class="criminal__header">
               ${criminal.name}
            </header>
            <div>Age: ${criminal.age}</div>
            <div>
                Crime: ${criminal.conviction}
            </div>
            <div>
                Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
            </div>
            <div>
                Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
            </div>
            <button id="associates--${criminal.id}">Associate Alibis</button>
        </section>
    `

export default Criminal

// const CriminalComponent = (criminal) => {
//   return `
//       <div class="criminal">
//             <header class="criminal__header">Name: ${criminal.name}</header>
//               <div>Age: ${criminal.age}</div>
//               <div>Crime: ${criminal.conviction}</div>
//               <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString("en-US")}</div>
//               <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString("en-US")}</div>
//               <button id="associates--${criminal.id}">Associate Alibis</button>
//       </div>
//   `
// }

// export default CriminalComponent