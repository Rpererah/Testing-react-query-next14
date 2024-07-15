import { Suspense } from "react";
import ListPokemon from "./list-pokemons";

export default function Pokemon() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokémon List</h1>
      <div>
        <Suspense fallback={"carregando ..."}>
          <ListPokemon />
        </Suspense>
      </div>
    </div>
  );
}
