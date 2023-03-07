import { useStore } from '@nanostores/react';
import { fetchList, poke, PokemonType } from '../store/poke';

function PokeItem({ poke }: { poke: PokemonType }) {
  return (
    <div>
      <span>{poke.name}</span>
    </div>
  );
}

export const PokemonList = () => {
  const list = useStore(poke);
  return (
    <>
      Total pokemons: {list.length}
      <br />
      <button onClick={fetchList}>Fetch</button>
      <br />
      -----------------
      <ul>
        {list.map((poke) => (
          <PokeItem key={poke.name} poke={poke} />
        ))}
      </ul>
    </>
  );
};
