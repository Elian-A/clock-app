import { z } from "zod";
import axios from "axios";

const STOIC_QUOTES_API = "https://stoicquotesapi.com/v1/api/quotes/random";

const quoteValidator = z.object({
  id: z.number(),
  body: z.string(),
  author: z.string(),
});

export const getQuote = async () => {
  const { data } = await axios.get(STOIC_QUOTES_API);

  return quoteValidator.parse(data);
};
