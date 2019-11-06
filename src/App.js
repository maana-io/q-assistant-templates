import React from 'react'
import logo from './logo.svg'
import './App.css'
import AssistantAPIClient from '@io-maana/q-assistant-client'
require('dotenv').config()

console.log(
  'Your example env. variable { REACT_APP_VAR } is set to: ',
  process.env.REACT_APP_VAR
)

//
// ----- Some quick queries to get you started ------
//

// Get the workspace.
// const ws = await AssistantAPIClient.getWorkspace()

// Get the workspace kinds.
// const kinds = await ws.getKinds()

// Get the workspace functions.
// const funcs = await ws.getFunctions()

// Get kind or function by ID.
// const someKind = await AssistantAPIClient.getKindById('id....')
// const someFunc = await AssistantAPIClient.getFunctionById('id....')

// Get the active graph.
// const ag = await ws.getActiveGraph()

// Get the active graph's nodes.
// const nodes = await ag.getNodes()

async function addFunctionNode() {
  const createFunctionInput = {
    name: 'assistantGeneratedFunction',
    arguments: [],
    outputType: 'STRING',
    graphqlOperationType: 'QUERY',
    functionType: 'CKG'
  }

  const func = await AssistantAPIClient.createFunction(createFunctionInput)
  const ws = await AssistantAPIClient.getWorkspace()
  const ag = await ws.getActiveGraph()
  const node = await ag.addNode('Function', func)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello, Workspace!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            addFunctionNode()
          }}
        >
          Add a Function Node!
        </button>
      </header>
    </div>
  )
}

export default App
