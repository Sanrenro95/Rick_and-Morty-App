import SearchBar from './SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import style from './nav.module.css'


const Nav = ({ onSearch }) => {
    return (
        <nav>
            <div>
                <div className={style.container}>
                    <Link className={style.link} to='/'> Log Out</Link>
                    <Link className={style.link} to='/about'>About</Link>
                    <Link className={style.link} to='/home'>Home</Link>
                    <Link className={style.link} to='/favorites'>Favorites</Link>
                </div>
                
                <SearchBar onSearch={ onSearch } />
            </div>
        </nav>
        
    )
}

export default Nav;