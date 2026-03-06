import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const message:string = "Hello World";// This is a TypeScript type annotation, which specifies that the variable 'message' is of type 'string'. If you try to assign a value of a different type to 'message', TypeScript will give you an error. For example, if you try to assign a number to 'message', like this: message = 123; TypeScript will give you an error because 123 is not a string. This helps catch bugs early and makes your code more robust.
  console.log(message.toLowerCase()); // This will work because 'message' is a string and has the 'toLowerCase' method.

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
