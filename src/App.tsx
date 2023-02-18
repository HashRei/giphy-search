import "./App.css";
import { GifSearchBar } from "./components/GifSearchBar";
import { GifSearchProvider } from "./context/GifSearchContext";

function App() {
  return (
    <div>
      <GifSearchProvider>
        <GifSearchBar />
      </GifSearchProvider>
    </div>
  );
}

export default App;
