import SearchBar from './SearchBar/SearchBar'
import {Link} from 'react-router-dom'


const Nav = ({ onSearch }) => {
    return (
        <nav>
            <div>
                <Link to='/'> Log Out</Link>
                <Link to='/about'>About</Link>
                <Link to='/home'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
                <SearchBar onSearch={ onSearch } />
            </div>
        </nav>
        
    )
}

export default Nav;