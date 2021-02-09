import React from "react";
import NavBar from "./NavBar";
import { data } from "../data";
import MovieCard from "./MovieCard";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    // make api call
    // dispatch action
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    console.log(this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();

    return (
      <div className="App">
        <NavBar />
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourite</div>
        </div>
        <div className="list">
          {movies.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;
