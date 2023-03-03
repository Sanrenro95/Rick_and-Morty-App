import { useState } from 'react'
import style from './SearchBar.module.css'


function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);
   };

   return (
      <div className={style.container}>
         <input type='search' value={character} onChange={handleChange} className={ style.input} placeholder="Agregar numero..."/>
         <button onClick={()=>onSearch(character)} className={ style.btn} >Agregar</button>
      </div>
   );
}

export default SearchBar;