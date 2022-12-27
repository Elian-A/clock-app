import { useQuery } from "react-query";
import { getQuote } from "./api";
import Reload from "../reload/reload";

const Quotes = () => {
  const { data, isLoading, isError, refetch } = useQuery("quote", getQuote, {
    refetchOnWindowFocus: false,
  });

  if (!data || isLoading) return <p>loading...</p>;
  if (isError) return <p>error...</p>;

  const { body: quote, author } = data;

  return (
    <div>
      <figure>
        <blockquote>{quote}</blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <div>
        <button onClick={() => refetch()}>
          <Reload />
        </button>
      </div>
    </div>
  );
};

export default Quotes;
