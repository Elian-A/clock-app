import { FC } from 'react'
import Info from '../info/info'
import { day, dayOfYear, month } from './utils'

const InfoList: FC<{ date: Date }> = ({ date }) => {
    const infoList = [
        {
            id: 1,
            title: "Current timezone",
            data: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        {
            id: 2,
            title: "Day of the year",
            data: dayOfYear(date)
        },
        {
            id: 3,
            title: "Day of the week",
            data: day(date)
        },
        {
            id: 4,
            title: "Month",
            data: month(date)
        },
    ]
    return (
        <div>
            {infoList.map(info => <Info key={info.id} info={info} />)}
        </div>
    )
}

export default InfoList