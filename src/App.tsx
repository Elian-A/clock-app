import { atom, useAtom } from "jotai";
import Clock from "./components/clock/clock.component";
import Quotes from "./components/quotes/quotes.component";

export const toggleMoreInfo = atom(false);

function App() {
  const [infoState] = useAtom(toggleMoreInfo);
  return (
    <main
      className={`h-screen bg-day bg-[#7a7a7a] bg-blend-multiply bg-cover
      px-6 py-10
      flex flex-col  
      ${infoState ? "justify-end" : "justify-between"}`}
    >
      {infoState ? null : <Quotes />}
      <Clock infoState={infoState} />
    </main>
  );
}

export default App;
