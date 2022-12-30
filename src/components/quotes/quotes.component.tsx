import { useQuery } from "react-query";
import { getQuote } from "./quotes.api";
import { Reload } from "../SVGs";
import Loading from "../loading/loading";

const Quotes = () => {
  const { data, isLoading, isError, refetch } = useQuery("quote", getQuote, {
    refetchOnWindowFocus: false,
  });

  if (isLoading || !data)
    return (
      <div className="flex justify-between gap-2 w-[90%] mx-auto">
        <Loading />;
      </div>
    );
  if (isError) return <p>error...</p>;

  const { body: quote, author } = data;

  return (
    <div className="flex justify-between gap-2 w-[90%] mx-auto">
      <figure className="flex flex-col gap-2">
        <blockquote className="font-serif text-white text-lg">
          {quote}
        </blockquote>
        <figcaption className="font-sans text-white text-lg">
          {author}
        </figcaption>
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
