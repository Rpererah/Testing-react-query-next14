"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemonData } from "./getPokemon";
import Card from "./card";

export default function ListPokemon() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => await getPokemonData(),
  });
  if (isError) {
    return <div>Erro ao executar a chamada</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.results?.map(
        (pokemon: {
          name: string;
          sprites: { front_default: string };
          id: number;
        }) => {
          return (
            <Card
              key={pokemon.id}
              title={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          );
        }
      )}
    </>
  );
}
