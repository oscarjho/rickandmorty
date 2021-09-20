import { useContext, useState} from "react"
import { CharactersContext } from "../context/CharactersContext"
import { useQuery } from '@apollo/client'
import GET_CHARACTERS from '../gql'
import Card from './Card'
import Modal from './Modal'
import Loading from './Loading'

const Characters = () => {
    const {character} = useContext(CharactersContext)

    const [state, setState] = useState({
        selected: '',
        modalIsOpen: false,
        page: 1
    })

    const {page} = state

    const query = useQuery(GET_CHARACTERS(page, character))
    if(character.trim() === "") return null;

    const {loading, error, data} = query

    if (loading) {
        return (
            <Loading loading={loading} />
        )
    }

    if (error) {
        return (
            <div className="error">
                <div>
                Error looking for: {character}
                </div> 
                <div>
                {error.message}
                </div>
            </div>
        )
    }

    // Pagination Start
    const pagestoarray = (pages) => {
        let array = []
        for (let i = 1; i <= pages ; i++) {
            array.push(i)
        }
        return array
    }
    const pages = data.characters.info.pages
    const pagesarray = pagestoarray(pages)
    const paginatorclick = (number) => {
        setState({
            ...state,
            page: number
        })
    }

    const active = (number) => {
        if(number===state.page){
            return "active page"
        }
        return "page"
    }


    const paginator = pagesarray.map(
        (number) => 
            <div className={active(number)} onClick={() => paginatorclick(number)}> {number} 
            </div>
    )
    const prev = data.characters.info.prev
    const prevpag = prev ? <div className="page" onClick={()=>paginatorclick(prev)}>Previous</div> : null 
    const next = data.characters.info.next
    const nextpag = next ? <div className="page" onClick={()=>paginatorclick(next)}>Next</div> : null

    // Pagination ends

    const handleCardClick=(character)=> {
        setState({
            ...state,
            selected: character,
            modalIsOpen: true
        })
        return 

    }

    const isClose = () => {
        setState({
            ...state,
            modalIsOpen: false
        })
    }

    const {selected, modalIsOpen} = state;

    const characters = data.characters.results.map(
        character => {
            return (
                <div className="character_item"> 
                    <Card 
                        character={character} onClick={() => handleCardClick(character)} 
                    />
                </div>
            )
        }
    )

    return (
        <div>
            <div className="characters_container">
            {characters}
            </div>
            <div className="paginator_container">
            {prevpag}
            {paginator}
            {nextpag}
            </div>
            <div>
                <Modal character={selected} isOpen={modalIsOpen} isClose={isClose} />
            </div>
        </div>
    )
}

export default Characters