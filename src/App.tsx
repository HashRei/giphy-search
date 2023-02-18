import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      // perform search using searchValue when the timer expires 
      console.log(`Search for ${searchValue}`);
    }, 300);

    // Clear the timer if the component is unmounted or if the searchValue changes
    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <input
        type="text"
        placeholder="Enter text to search GIF"
        name="gifSearch"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
