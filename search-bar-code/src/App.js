import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import axios from 'axios';

function App() {
  const [BookData, setBookData] = useState([]);
  useEffect(() => {
    ( async () => {
      const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?offset=0&limit=500');
      setBookData(response.data.results);
    })();
  }, []);
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
    </div>
  );
}

export default App;
