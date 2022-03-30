//create react component for search giphy
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Search = () => {
  const [text, setText] = useState('');
  const [gifts, setGifts] = useState([]);

  const getGifts = async () => {
    const gifts = await fetch(
      `https://api.giphy.com/v1/stickers/search?api_key=Ts1gtv0VAvnEBEcTVh4x4hz1QPddwTq2&q=${text}&limit=12&offset=0&rating=G&lang=en`
    ).then((response) => response.json());
    setGifts(gifts.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getGifts();
  };

  useEffect(() => {
    getGifts();
  }, []);
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {gifts.map((gift) => (
          <img src={gift.images.original.url} alt={gift.title} />
        ))}
      </div>
    </div>
  );
};

export default Search;