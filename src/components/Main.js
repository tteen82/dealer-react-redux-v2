import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Users from './Users';
import Nav from './Nav';
import Cart from './Cart';
import ItemList from './Items';
import { setUsers, setCategories } from '../store';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

class Main extends React.Component {
  componentDidMount() {
    try {
      this.props.setUsers();
      this.props.setCategories();
    } catch (err) {
      console.log('There was a problem to load users!');
      console.log(err);
    }
  }

  render() {
    return (
      <Router>
        <div id='main'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/items' element={<ItemList />} />
          </Routes>
        </div>
        <Cart />
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: () => {
      dispatch(setUsers());
    },
    setCategories: () => {
      dispatch(setCategories());
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Main);
