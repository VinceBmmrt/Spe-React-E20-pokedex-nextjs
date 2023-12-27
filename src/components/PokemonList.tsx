"use client";

// use client me permet de dire que le composant pourra s'exécuter côté serveur ET navigateur

import { Pokemon } from "@/@types/pokemon";
import { useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import Link from "next/link";

export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  const [page, setPage] = useState(1);
  const [nbPerPage] = useState(20);

  const pokemonFiltered = pokemons.slice(
    (page - 1) * nbPerPage,
    page * nbPerPage,
  );
  return (
    <div>
      <div className="flex gap-2 mb-2 justify-center">
        <button
          type="button"
          className="bg-yellow-500 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Précédent
        </button>
        <button
          type="button"
          className="bg-yellow-500 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={pokemons.length < nbPerPage * page}
          onClick={() => setPage(page + 1)}
        >
          Suivant
        </button>
      </div>
      <div>
        {pokemonFiltered.map((pokemon) => (
          <Link href={`/pokemon/${pokemon.pokedexId}`} key={pokemon.pokedexId}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
}
