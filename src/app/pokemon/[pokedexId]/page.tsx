import { Pokemon } from "@/@types/pokemon";

// Les paramètres de nos pages sont accessibles depuis les propriétés de notre composant de page
// Il y a une propriété params qui contient les paramètres
export default async function PokemonDetail({
  params: { pokedexId },
}: {
  params: { pokedexId: string };
}) {
  const pokemon: Pokemon = await fetch(
    `https://tyradex.vercel.app/api/v1/pokemon/${pokedexId}`,
  ).then((r) => r.json());
  return (
    <div>
      <h1>{pokemon.name.fr}</h1>
      <form
        action={async (formData) => {
          "use server";

          /* Il est possible d'exécuter un formulaire côté serveur */
          /* Il suffit de passer dans action une fonction asynchrone */
          /* Et de renseigner un `"use server" dedans` */
          console.log(formData.get("toto"));
        }}
      >
        <input name="toto" />
      </form>
    </div>
  );
}
