import { Pokemons } from "../../containers/Pokemons/Pokemons"
import { Types } from "../../containers/Types/Types"

export const Main = () => {
    return (
        <div className="p-4">
            <h1>PokemonsTypesApp</h1>
            <div className="flex items-baseline gap-4">
                <Types />
                <Pokemons />
            </div>
        </div>
    )
} 