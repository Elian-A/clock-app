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
    <div className="w-[80%] mx-auto flex justify-between gap-2">
      <figure className="flex flex-col gap-2">
        <blockquote className="font-serif text-white">{quote}</blockquote>
        <figcaption className="font-sans text-white">{author}</figcaption>
      </figure>
      <div className="grid items-center">
        <button onClick={() => refetch()} className="h-6 w-6 ">
          <Reload fill="white" />
        </button>
      </div>
    </div>
  );
};

export default Quotes;
