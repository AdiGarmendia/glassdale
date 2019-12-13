const witnessComponent = (witness) => {
  return `
      <div class="witness">
            <header class="witness_header">Name: ${witness.name}</header>
              <div>Statements: ${witness.statements}</div>
      </div>
  `
}

export default witnessComponent