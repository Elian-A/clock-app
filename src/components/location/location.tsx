import { useQuery } from "react-query";
import { getLocation } from "./api";

const Location = () => {
  const { data, isLoading, isError } = useQuery("location", getLocation);

  if (isLoading || !data) return <p>loading...</p>;
  if (isError) return <p>error...</p>;

  const { city, country_name: country, country_code: code } = data;

  return (
    <div>
      <p>
        {`${country},`} {city ? city : code}
      </p>
    </div>
  );
};

export default Location;
