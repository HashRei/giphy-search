import { useEffect } from "react";
import { useSearchValue, useSetSearchValue } from "../context/GifSearchContext";

export const GifSearchBar = (): JSX.Element => {

  const searchValue = useSearchValue();
  const setSearchValue = useSetSearchValue();

  useEffect(() => {
    const timer = setTimeout(() => {
      // perform search using searchValue
      console.log(`Search for ${searchValue}`);
    }, 300);

    // Clear the timer if the component is unmounted or if the searchValue changes
    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <input
        type="text"
        placeholder="Enter text to search GIF"
        name="gifSearch"
        onChange={handleSearchChange}
      />
    </div>
  );
};
