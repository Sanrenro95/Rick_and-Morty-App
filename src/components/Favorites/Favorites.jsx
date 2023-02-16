import { connect } from "react-redux";

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      <h2>My Favorites</h2>
      {myFavorites?.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
