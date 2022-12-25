import { FC } from "react"

interface Info {
    id: number,
    title: string,
    data: string | Date | number
}

const Info: FC<{ key: number, info: Info }> = () => {
    return (
        <div>
        </div>
    )
}

export default Info