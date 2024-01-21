import React, { useEffect, useState } from 'react'

const App = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then( // can do this because we specified the proxy in the package.json to be localhost:5000
      response => response.json(),
      console.log("api fetched")
      ).then(
        data => {
          setBackendData(data)
        }
      )
  }, []) // passed in an empty array so it only runs on the first render of the component

  return (
    <div>
      {(typeof backendData.users == 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App