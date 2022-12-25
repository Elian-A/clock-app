import { useQuery } from "react-query"
import { getLocation } from "./api"


const Location = () => {
    const { data, isLoading, error } = useQuery('location', getLocation)
    if (!data) return <p>loading</p>
    const { city, country_name: country, country_code: code } = data
    return (
        <div>

            <p>{`${country},`} {city ? city : code}</p>
        </div>
    )
}

export default Location