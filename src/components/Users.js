import React from 'react';
import { viewCart, addingUser } from '../store';
import { connect } from 'react-redux';

const Users = ({ users, addingUser, viewCart }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <a
            href=''
            onClick={(e) => {
              e.preventDefault();
              viewCart(user.id);
            }}
            key={user.id}
          >
            <li> {user.name}</li>
          </a>
        ))}
      </ul>
      <form
        id='newInput'
        onSubmit={(e) => {
          e.preventDefault();
          addingUser(e.target.name.value);
          e.target.name.value = '';
        }}
      >
        <h3> Create New User</h3>
        <input name='name' placeholder='add a new name' />
        <button> Create </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewCart: (userId) => {
      dispatch(viewCart(userId));
    },
    addingUser: (name) => {
      dispatch(addingUser(name));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Users);
