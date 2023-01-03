import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../store';

const Cart = ({ cartUser, cartList, removeItem }) => {
  return (
    <div id='cart'>
      {cartUser ? cartUser.name + "'s " : ''}
      Cart ({cartList.length})
      <ul>
        {cartList.map((list) => (
          <li key={list.id}>
            {list.item.name}
            <button value={list.id} onClick={(e) => removeItem(e.target.value)}>
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
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Cart);
