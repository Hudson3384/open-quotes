import { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ list, setList] = useState()
  const [ random, setRandom ] = useState(0)

  useLayoutEffect(() => {
    handleInitialQuotes()
  },[])

  const handleInitialQuotes = async () => {
    const result = await axios.get('https://quotes.apps.app.br', {headers: {'Content-Type': 'application/json', Accept: 'application/json'}})
    const newList = result.data.map((item) => {
      const [quote, author] = item.split(" - ");
      return { quote: quote.slice(1, -1), author: author };
    })
    setList(newList)
    handleRandomNumbers()
  }

  const handleRandomNumbers = () => {

    const randomNumber = Math.floor(Math.random() * list.length);
    setRandom(randomNumber)
  }

  const handleNewQuote = () => {
    handleRandomNumbers()
  }


  return (
      <main id='quote-box'>
        <div id='quote'>
          <p id='text'>
            { list ? list[random].quote : null }
          </p>
          <span id='author'>
            { list ? list[random].author : null }
          </span>
        </div>
        <div id='quote-actions'>
          <button id='new-quote' onClick={handleNewQuote}>
            NEW QUOTE
          </button>
        </div>
      </main>
  )
}

export default App
