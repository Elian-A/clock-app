export const moonUrl = "/moon.svg"
export const sunUrl = "/sun.svg"
export const getIcon = (hours: number) => ({
  src: +hours > 6 && +hours < 18 ? sunUrl : moonUrl,
  alt: +hours > 6 && +hours < 18 ? "sun" : "moon",
});

