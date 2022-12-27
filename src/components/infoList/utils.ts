const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dayOfYear = (today: Date) => {
    // Get the first day of a year
    let firstDay = new Date(today.getFullYear(), 0);

    // Get the day of the year
    let dayOfYear = Math.floor((+today - +firstDay) / 1000 / 60 / 60 / 24) + 1;

    return dayOfYear
}
const day = (today: Date) => days[today.getDay()]
const month = (today: Date) => months[today.getMonth()]
export const getInfoList = (today: Date) => [
    {
      id: 1,
      title: "Current timezone",
      data: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    {
      id: 2,
      title: "Day of the year",
      data: dayOfYear(today),
    },
    {
      id: 3,
      title: "Day of the week",
      data: day(today),
    },
    {
      id: 4,
      title: "Month",
      data: month(today),
    },
  ]
