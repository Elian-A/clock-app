import { useQuery } from "react-query";
import Loading from "../loading/loading";
import { getLocation } from "./location.api";

const Location = () => {
  const { data, isLoading, isError } = useQuery("location", getLocation);

  if (isLoading || !data)
    return (
      <div className="self-start scale-75">
        <Loading />;
      </div>
    );
  if (isError) return <p>error...</p>;

  const { city, country_name: country, country_code: code } = data;

  return (
    <p className="text-white text-xl tracking-widest font-sans font-bold uppercase flex gap-2">
      <span>{`${country},`}</span>
      <span>{city ? city : code}</span>
    </p>
  );
};

export default Location;
