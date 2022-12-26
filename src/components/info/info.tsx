import { FC } from "react"

interface Info {
    id: number,
    title: string,
    data: string | number
}

const Info: FC<{ info: Info }> = ({ info }) => {
    const { data, title } = info
    return (
        <div>
            <p>{title}</p><p>{data}</p>
        </div>
    )
}

export default Info