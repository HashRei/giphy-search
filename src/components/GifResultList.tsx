import "../index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchValue } from "../context/GifSearchContext";

interface Picture {
  embed_url: string;
}

export const GifResultList = () => {
  const searchValue = useSearchValue();

  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    const fetchPictures = async () => {
      const params = {
        api_key: process.env.REACT_APP_MY_API_KEY,
        q: searchValue,
        limit: 32,
        offset: 5,
        rating: "g",
        lang: "en",
        random_id: "e826c9fc5c929e0d6c6d423841a282aa",
        bundle: "messaging_non_clips",
      };

      try {
        const response = await axios.get(
          "https://api.giphy.com/v1/gifs/search",
          { params }
        );
        setPictures(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPictures();
  }, [searchValue]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {pictures !== undefined ? (
        pictures.map((picture, index) => (
          <div key={index}>
            <iframe
              src={picture.embed_url}
              title={picture.embed_url}
              width="480"
              height="270"
            ></iframe>
          </div>
        ))
      ) : (
        <div>Nothing</div>
      )}
    </div>
  );
};
