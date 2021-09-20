import CharactersProvider from '../context/CharactersContext'
import Searcher from '../components/Searcher'
import Characters from '../components/Characters'

const Home = () => {
    return (
        <div>
          <CharactersProvider>
            <Searcher />
            <Characters />
          </CharactersProvider>
        </div>
    )
}

export default Home