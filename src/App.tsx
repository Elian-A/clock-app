import { atom, useAtom } from "jotai";
import { useState } from "react";
import Clock from "./components/clock/clock.component";
import Quotes from "./components/quotes/quotes.component";

export const toggleMoreInfo = atom(false);

function App() {
  const [infoState] = useAtom(toggleMoreInfo);
  const [auxHs, setAuxHs] = useState(0);
  const grabHour = (hours: string) => setAuxHs(+hours);

  const bgImg = () =>
    !auxHs ? "" : auxHs >= 6 && auxHs < 18 ? "bg-day" : "bg-night";

  return (
    <main
      className={`pt-10 h-screen flex flex-col 
      ${bgImg()} bg-[#7a7a7a] bg-blend-multiply bg-cover
      ${infoState ? "justify-end" : "justify-between"}`}
    >
      {infoState ? null : <Quotes />}
      <Clock infoState={infoState} grabHour={grabHour} />
    </main>
  );
}

export default App;
