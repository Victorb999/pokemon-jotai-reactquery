import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { pokeTypeSelectedAtom } from "../../store/store";
import { requestPokemons } from "../../services/poketype";
import { PokemonPerType } from "../../services/types";

const pickNumberPokemonFromUrl = (url:string) => {
// Use uma expressão regular para encontrar o número no final da URL
  const match = url.match(/\/(\d+)\/$/);
  if (match && match[1]) {
    // Retorna o número encontrado como uma string
    const numberString = match[1];
        // Use padStart para garantir que o número sempre tenha três casas, preenchendo com zeros à esquerda, se necessário
    const paddedNumber = numberString.padStart(3, '0');

    return paddedNumber;
  } else {
    // Se a correspondência não for encontrada, retorne string vazia
    return '000';
  }
}

const returnImgPokemon = (url: string) => {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pickNumberPokemonFromUrl(url)}.png`
}

export const Pokemons = () => {
    const [pokeTypeSelected] = useAtom(pokeTypeSelectedAtom);
    const { isError, isLoading, data } = useQuery(
        ["pokemons", pokeTypeSelected],
        () => requestPokemons(pokeTypeSelected),
        {
          enabled: !!pokeTypeSelected && pokeTypeSelected !== "", // Habilita a consulta apenas se cardSet não for nulo ou indefinido
          refetchOnWindowFocus: false, // Impede que a consulta seja disparada quando a janela está em foco
        },
      );
    
      if (isLoading) return <h1>Loading...</h1>;
      if (isError) return <h1>Error</h1>;
      if(!data) return <></> 
    return (
        <div>
            <div className="bg-gray-500 m-2 p-2 rounded 
                        flex flex-row flex-wrap w-96 items-center justify-center">            
                {  
                data.map((pokemon:PokemonPerType) => {
                return(
                    <div key={pokemon.pokemon.name} 
                    className="w-[100px] bg-gray-300 m-2 p-2 rounded
                    flex flex-col items-center justify-center"
                    >
                        <img src={returnImgPokemon(pokemon.pokemon.url)} 
                        alt={pokemon.pokemon.name} className='w-16'/>
                        <span>{pokemon.pokemon.name}</span>
                    </div>
                )
                })
                } 
            </div>
        </div>
    )
} 