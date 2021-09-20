import { useContext, useState } from "react";
import { CharactersContext } from "../context/CharactersContext";
import head from '../imgs/head.png'

const Searcher = () => {

    const {setCharacter} = useContext(CharactersContext)

    const [search, setSearch] = useState('')

    const handleChange = ev => {
        setSearch(ev.target.value)
      }

      const handleSubmit = ev => {
        ev.preventDefault()
        setCharacter(search)
        }

    return (
        <div className="search_container"> 
            <div className="headimage container d-flex justify-content-center">
                <img src={head} alt="rickandmorty" className="img-fluid" />
            </div>
            <div className="search_form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="character" placeholder="Search..." onChange={handleChange} className="search_input"/>
                <button type="submit" className="search_button">Search</button>
            </form>
            </div>
        </div>
    )
}

export default Searcher;