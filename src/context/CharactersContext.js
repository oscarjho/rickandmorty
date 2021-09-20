import {createContext, useState} from 'react'

//Crear Context
export const CharactersContext = createContext()

// Provider es donde se encuentran las funciones y state
const CharactersProvider = (props) => {
    
    //States para las categorias
    const [character, setCharacter] = useState('')


    return (
        <CharactersContext.Provider
            value={{
                character,
                setCharacter
            }}
        >
            {props.children}
        </CharactersContext.Provider>
    )
}

export default CharactersProvider;