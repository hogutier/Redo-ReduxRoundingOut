import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlideShow from './components/SlideShow';
import { login, selectUsername, reservedRoom } from './reducers/auth';
import { fetchRooms } from './reducers/rooms';

class App extends Component {
  componentDidMount() {
    const { login, fetchRooms } = this.props;
    login();
    fetchRooms();
  }

  render() {
    const { userName, isFetching } = this.props;
    if (isFetching){
      return (
        <div className="loader" />
      )
    }
    const accomodation = this.props.accomodation || ""


    return (
      <div className="App">
        <div className="main">
          <img src="./logo.png" width={250} alt="Redux Hotel" />
          <h1>Your Reservation</h1>
          <p>Name: {userName}</p>
          <h2>Accomodation:   </h2>
          <p><em>{accomodation.name}</em></p>
          <p><img src={accomodation.image} width={300} alt="accomodation" /></p>
        </div>
        <SlideShow />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, rooms } = state;
  return {
    userName: selectUsername(state),
    isFetching: auth.isFetching,
    accomodation: reservedRoom(state)
  };
};

//Shorter notation to pass properties with the same name (destructuring) You can pass an //object IF key names exported correspond to the same names imported
const mapDispatchToProps = { login, fetchRooms };

export default connect(mapStateToProps, mapDispatchToProps)(App);
