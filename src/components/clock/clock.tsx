import { useEffect, useState } from "react"
import Greeting from "../greeting/greeting"
import InfoButton from "../infoButton/infoButton"
import InfoList from "../infoList/infoList"
import Location from "../location/location"
import Time from "../time/time"


const formatTime = (date: Date) => {
    const hs = date.getHours()
    const min = date.getMinutes()
    const hours = String(hs).length === 1 ? `0${hs}` : `${hs}`
    const minutes = String(min).length === 1 ? `0${min}` : `${min}`
    return {
        hours,
        minutes
    }
}

const moonUrl = "/moon.svg"
const sunUrl = "/sun.svg"


const Clock = () => {
    const [date, setDate] = useState(new Date())
    const { hours, minutes } = formatTime(date)
    const icon = {
        src: +hours > 6 && +hours < 18 ? sunUrl : moonUrl,
        alt: +hours > 6 && +hours < 18 ? "sun" : "moon",
    }

    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 5000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div>
            <Greeting icon={icon} hours={hours} />
            <Time hours={hours} minutes={minutes} />
            <Location />
            <InfoButton />
            <InfoList date={date} />
        </div>
    )
}

export default Clock