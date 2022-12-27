export const greet = (hours: number) => {
    const greeting = +hours > 6 && +hours < 12 ? "Good Morning"
        : +hours > 12 && +hours < 18 ? "Good Afternoon" : "Good Night"
    return greeting
}