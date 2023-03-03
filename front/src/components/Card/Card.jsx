import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFeatures, removeFavorite } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      console.log('Sirvo');
      setIsFav(false);
      dispatch(removeFavorite(props.id));
    } else {
      console.log('Tambien');
      setIsFav(true);
      dispatch(addFeatures(props));
    }
    
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.back}>
      {isFav ? (
        <button className={style.btnFavorite} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.btnFavorite} onClick={handleFavorite}>
          🤍
        </button>
      )}
      <button onClick={props.onClose} className={style.btnDelete}>
        X
      </button>
      <img src={props.image} alt={props.name} className={style.image} />
      <Link to={`/detail/${props.detailId}`}>
        <h2 className={style.titleFirst}>{props.name}</h2>
      </Link>
      <div className={style.cardSubtitle}>
        <h2 className={style.title}>{props.species}</h2>
        <h2 className={style.title}>{props.gender}</h2>
      </div>
    </div>
  );
}

export default Card;
