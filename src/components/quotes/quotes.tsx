import { useQuery } from "react-query";
import { getQuote } from "./api";

const Quotes = () => {
  const { data, isLoading, error, refetch } = useQuery("quote", getQuote, {
    refetchOnWindowFocus: false,
  });

  if (!data || isLoading) return <p>loading...</p>;

  const { body: quote, author } = data;

  return (
    <div>
      <figure>
        <blockquote>{quote}</blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <button onClick={() => refetch()}>
        <img src="/reload.svg" alt="reload" />
      </button>
    </div>
  );
};

export default Quotes;
