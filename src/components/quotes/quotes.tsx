import { z } from 'zod'
import axios from 'axios'
import { useQuery } from 'react-query'

const STOIC_QUOTES_API = 'https://stoicquotesapi.com/v1/api/quotes/random'

const quoteValidator = z.object({
  id: z.number(),
  body: z.string(),
  author: z.string(),
})

const getQuote = async () => {
  const { data } = await axios.get(STOIC_QUOTES_API)

  return quoteValidator.parse(data)
}

const Quotes = () => {
  const { data, isLoading, error, refetch } = useQuery("quote", getQuote, {
    refetchOnWindowFocus: false
  })

  if (!data || isLoading) return <p>loading...</p>

  const { body: quote, author } = data

  return (
    <div>
      <figure>
        <blockquote>
          {quote}
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <button onClick={() => refetch()}>
        <img src="/public/reload.svg" alt="reload" />
      </button>
    </div>
  )
}

export default Quotes