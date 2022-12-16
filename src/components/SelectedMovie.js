import React from 'react';
import { connect } from 'react-redux';
import { showingCasting, setCasting } from '../store';
import Casting from './Casting';

const SelectedMovie = (props) => {
  const { selectedMovie, castingCall, showingCasting, showing } = props;
  const { id, title, year, imagesrc, synopsis } = selectedMovie;
  return (
    <section>
      <div id='movie'>
        <h1>
          {title} {year}
        </h1>
        <img src={imagesrc} />
        <h2>Plot</h2>
        <p>{synopsis}</p>
      </div>
      <div id='casting'>
        <a
          href=''
          onClick={(e) => {
            e.preventDefault();
            castingCall(id);
            showingCasting();
          }}
        >
          Show Casting
        </a>
        {showing ? <Casting /> : ''}
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    castingCall: (id) => {
      dispatch(setCasting(id));
    },
    showingCasting: () => {
      dispatch(showingCasting());
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(SelectedMovie);
