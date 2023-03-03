import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";
import style from './Favorites.module.css'

const Favorites = () => {
  const { myFavorites } = useSelector(state => state);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }


  return (
    <div>
      <div>
        <select onChange={handlerOrder} >
          <option value="order" disabled="disabled">Order by</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="filter" disabled="disabled">Filter by</option> 
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      <h2>My Favorites</h2>
      {myFavorites.map((character) => {
        return (
          <div className={style.back} key={character.id}>
            <img src={character.image} alt={character.name} className={style.image}  />
            <Link to={`/detail/${character.detailId}`}>
              <h2 className={style.titleFirst}>{character.name}</h2>       
            </Link>
            <div className={style.cardSubtitle}>
              <h2 className={style.title}>{character.species}</h2>
              <h2 className={style.title}>{character.gender}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;