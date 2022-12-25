const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const dayOfYear = (today: Date) => {
    // Get the first day of a year
    let firstDay = new Date(today.getFullYear(), 0);

    // Get the day of the year
    let dayOfYear = Math.floor((today - firstDay) / 1000 / 60 / 60 / 24) + 1;

    return dayOfYear
}
export const day = (today: Date) => days[today.getDay()]
export const month = (today: Date) => months[today.getMonth()]