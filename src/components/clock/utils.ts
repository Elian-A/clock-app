export const formatTime = (date: Date) => {
    const hs = date.getHours()
    const min = date.getMinutes()
    const hours = String(hs).length === 1 ? `0${hs}` : `${hs}`
    const minutes = String(min).length === 1 ? `0${min}` : `${min}`
    return {
        hours,
        minutes
    }
}

export const moonUrl = "/moon.svg"
export const sunUrl = "/sun.svg"

