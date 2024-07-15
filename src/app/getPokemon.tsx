export async function getPokemonData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9");
  const data = await response.json();

  const detailedPokemons = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const pokemonResponse = await fetch(pokemon.url);
      return pokemonResponse.json();
    })
  );

  return { results: detailedPokemons };
}
