import "./components/style.css";
import Main from "./components/Main";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Pokeinfo from "./components/Pokeinfo";

function App() {
  const [pokeDex, setPokeDex] = useState();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main infoPokemon={(poke) => setPokeDex(poke)} />}
        />
        <Route path="/:id" element={<Pokeinfo data={pokeDex} />} />
      </Routes>
    </>
  );
}

export default App;