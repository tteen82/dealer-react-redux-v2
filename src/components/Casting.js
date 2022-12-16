import React from 'react';
import { removeHero } from '../store';
import { connect } from 'react-redux';

const Casting = (props) => {
  const { castingList, removeHero } = props;
  return (
    <div id='castinglist'>
      <ul>
        {castingList.map((casting) => (
          <li key={casting.id}>
            {casting.hero.name}
            <button
              className='delete-button'
              value={casting.id}
              onClick={(e) => removeHero(e.target.value)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeHero: (id) => {
      dispatch(removeHero(id));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Casting);
