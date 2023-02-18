import "./App.css";
import { GifResultList } from "./components/GifResultList";
import { GifSearchBar } from "./components/GifSearchBar";
import { GifSearchProvider } from "./context/GifSearchContext";

function App() {
  return (
    <div>
      <GifSearchProvider>
        <GifSearchBar />
        <GifResultList />
      </GifSearchProvider>
    </div>
  );
}

export default App;
