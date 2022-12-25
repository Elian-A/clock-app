import { FC } from "react"

const Time: FC<{ hours: string, minutes: string }> = ({ hours, minutes }) => {
    return (
        <div>
            <p>{`${hours}:${minutes}`}</p>
        </div>
    )
}

export default Time