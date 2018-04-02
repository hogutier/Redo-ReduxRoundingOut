import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlideShow from './components/SlideShow';
import { login } from './reducers/auth';
import { fetchRooms } from './reducers/rooms';
import { selectUserName, selectUserRoom } from './reducers';

class App extends Component {
  componentDidMount() {
    const { login, fetchRooms } = this.props;
    login();
    fetchRooms();
  }

  render() {
    const { userName, accomodation } = this.props;
    return (
      <div className="App">
        <div className="main">
          <img src="./logo.png" width={250} alt="Redux Hotel" />
          <h1>Your Reservation</h1>
          <p>Name: {userName}</p>
          <h2>Accomodation</h2>
          {/* <p><em>{accomodation.name}</em></p>
          <p><img src={accomodation.image} width={300} alt="accomodation"/></p> */}
        </div>
        <SlideShow />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, rooms } = state;
  
  return {
    userName: auth.user && auth.user.firstName,
    // accomodation: ??
  };
};

const mapDispatchToProps = { login, fetchRooms };

export default connect(mapStateToProps, mapDispatchToProps)(App);
