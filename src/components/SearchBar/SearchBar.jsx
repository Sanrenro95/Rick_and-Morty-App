import { useState } from 'react'
import style from './SearchBar.module.css'


function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);
   };

   return (
      <div>
         <input type='search' value={character} onChange={handleChange} className={ style.border} />
         <button onClick={()=>onSearch(character)} className={ style.btn} >Agregar</button>
      </div>
   );
}

export default SearchBar;