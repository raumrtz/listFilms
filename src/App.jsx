import { useEffect, userState } from 'react'
const FILM_ENDPOINT_RANDOM_FACT = 'http://www.omdbapi.com/?apikey=[yourkey]&'

export function App () {
  const [fact, setFact] = userState()

  useEffect(() => {
    fetch(FILM_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1> Lista de peliculas </h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
