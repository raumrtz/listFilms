import { useEffect, useState } from 'react'
// const FILM_ENDPOINT_RANDOM_FACT = 'http://www.omdbapi.com/?apikey=[cc8f29a0]&'

export function App () {
  const [fact, setFact] = useState()
  const title = 'Matrix'

  useEffect(() => {
    // TODO: Las api keys van en el fichero de configuración .env
    fetch(`http://www.omdbapi.com/?apikey=cc8f29a0&t=${title}`)
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
