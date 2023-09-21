import { useQuery } from "react-query";
import { requestPokeTypes } from "../../services/poketype";
import { PokeTypes } from "../../services/types";
import { useAtom } from "jotai";
import { pokeTypeSelectedAtom } from "../../store/store";

export const Types = () => {
    const [, setPokeTypeSelected] = useAtom(pokeTypeSelectedAtom);
    const { isError, isLoading, data } = useQuery('types',requestPokeTypes)

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Erro</div>;

    return (
        <div className="bg-gray-500 m-2 p-2 rounded 
                        flex flex-row w-64 flex-wrap">
            {!data ? 
            (<div>Erro</div>) :
            (<>
                {  
                data.map((type:PokeTypes) => {
                return(
                    <button key={type.name} 
                    className="w-[100px] bg-gray-300 m-2 p-2 rounded"
                    onClick={() => setPokeTypeSelected(type.name)}
                    >
                    {type.name}
                    </button>
                )
                })
                }
            </>)
            }
        </div>
    )
} 