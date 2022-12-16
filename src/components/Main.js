import React from 'react';
import { connect } from 'react-redux';
import { setMovies } from '../store';
import Movies from './Movies';
import SelectedMovie from './SelectedMovie';

class Main extends React.Component {
  async componentDidMount() {
    try {
      this.props.setMovies();
    } catch (err) {
      console.log('There was a problem to load movies!');
      console.log(err);
    }
  }

  render() {
    return (
      <div id='container'>
        <Movies />
        {this.props.selectedMovie.id ? <SelectedMovie /> : ''}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMovies: () => {
      dispatch(setMovies());
    },
  };
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
