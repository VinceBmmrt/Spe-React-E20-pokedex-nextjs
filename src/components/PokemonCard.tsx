import { Pokemon } from "@/@types/pokemon";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="border-2 border-amber-600 p-2">
      <h3>{pokemon.name.fr}</h3>
      <img
        src={pokemon.sprites.shiny || pokemon.sprites.regular}
        loading="lazy"
        alt={pokemon.name.fr}
        className="w-full"
      />
    </div>
  );
}
