import { useEffect, userState } from 'react'

export function App () {
  const [fact, setFact] = userState('hola hola hola')

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=[yourkey]&')
      .then(res => res.json())
  }, [])

  return (
    <h1> Lista de peliculas </h1>
  )
}
