import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextPageAdress, setNextPageAdress] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    if (nextPageAdress) {
      fetch(nextPageAdress)
        .then((response) => response.json())
        .then((response) => {
          setCharacters([...characters, ...response.results]);
          setNextPageAdress(response.info.next);
        });
    }
  }, [nextPageAdress]);

  return <>{characters && <Characters characters={characters} />}</>;
}

export default App;
