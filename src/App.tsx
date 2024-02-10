import Content from "./components/Content";
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <div className="h-screen overflow-y-hidden bg-white dark:bg-black">
      <Header />
      <Content />
      <ToggleButton className="absolute z-50 bottom-10 right-10 border border-neutral-300 bg-slate-50 dark:bg-neutral-800 dark:border-neutral-700 rounded-full p-2" />
    </div>
  )
}
export default App;