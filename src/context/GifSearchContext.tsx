import React, { createContext, useContext, useState } from "react";

interface IGifSearchContext {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const GifSearchContext = createContext<IGifSearchContext>({
  searchValue: "",
  setSearchValue: () => {},
});

export function GifSearchProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <GifSearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </GifSearchContext.Provider>
  );
}

export function useSearchValue(): string {
  return useContext(GifSearchContext).searchValue;
}

export function useSetSearchValue(): (value: string) => void {
  return useContext(GifSearchContext).setSearchValue;
}
