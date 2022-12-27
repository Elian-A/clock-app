import axios from "axios"
import { z } from "zod"

const GEOLOCATION_API_URL = "https://geolocation-db.com/json/"

const locationValidator = z.object({
    country_name: z.string(),
    country_code: z.string(),
    city: z.string().nullable(),
})

export const getLocation = async () => {
    const { data: location } = await axios.get(GEOLOCATION_API_URL)

    return locationValidator.parse(location)
}