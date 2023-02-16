import {Link} from 'react-router-dom'
import style from './Card.module.css'
import { addFeatures, deleteFeatures } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';



function Card(props) {
  
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.myFavorites]);
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteFeatures(props.id);
    } else {
      setIsFav(true);
      props.addFeatures(props);
    }
  }

  return (
    <div className={style.back}>
      {
        isFav ? (
            <button onClick={handleFavorite}>❤️</button>
        ) : (
            <button onClick={handleFavorite}>🤍</button>
        )
      }
      <button onClick={props.onClose} className={style.btnDelete}>X</button>
      <img src={props.image} alt={props.name} className={style.image}  />
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
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    addFeatures: function (character) {
      dispatch(addFeatures(character))
    },
    deleteFeatures: function (id) {
      dispatch(deleteFeatures(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
