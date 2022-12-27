import Clock from "./components/clock/clock.component";
import Quotes from "./components/quotes/quotes.component";
function App() {
  return (
    <main
      className="h-screen bg-day bg-[#7a7a7a] bg-blend-multiply bg-cover
    px-8 py-10
    flex flex-col justify-between
    "
    >
      <Quotes />
      <Clock />
    </main>
  );
}

export default App;
