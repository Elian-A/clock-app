import { FC } from "react"
import { greet } from "./utils"

interface Icon {
    src: string,
    alt: string
}

const Greeting: FC<{ icon: Icon, hours: string }> = ({ icon, hours }) => {
    return (
        <div>
            <i><img src={icon.src} alt={icon.alt} /></i><p>{greet(hours)}</p>
        </div>
    )
}

export default Greeting