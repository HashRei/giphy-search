import { useState, useEffect } from 'react';

export const  GifSearchBar = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  
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
  }

  return (
    <div>
        <input
        type="text"
        placeholder="Enter text to search GIF"
        name="gifSearch"
        onChange={handleSearchChange}
      />
    </div>
  );
}
