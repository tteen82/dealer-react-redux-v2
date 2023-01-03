import React from 'react';
import { connect } from 'react-redux';
import { addingCart } from '../store';

const ItemList = ({ categories, cartUser, addingCart }) => {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <ul>
              {category.items.map((item) => (
                <a
                  href=''
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    const newEntry = {
                      itemId: item.id,
                      userId: cartUser.id,
                    };
                    addingCart(newEntry);
                  }}
                >
                  <li>{item.name}</li>
                </a>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addingCart: (newEntry) => {
      dispatch(addingCart(newEntry));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(ItemList);
