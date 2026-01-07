import { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch('https://portafolioscarlethm-production.up.railway.app/experiencia')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return <h1>App</h1>
}

export default App
