import Clock from "./components/clock/clock";
import Quotes from "./components/quotes/quotes";
function App() {
  return (
    <main className="h-screen bg-day bg-[#7a7a7a] bg-blend-multiply bg-cover">
      <Quotes />
      <Clock />
    </main>
  );
}

export default App;
