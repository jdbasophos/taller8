'use client'
import React from 'react';
import { FaUserAlt, FaEnvelope, FaRegListAlt, FaMapMarkedAlt, FaPhoneAlt, FaLock, FaDownload } from 'react-icons/fa';
import axios from 'axios'

export default class CardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      setActiveIcon: "",
      user: {
        cell: "",
        email: "",
        name: "",
        location: "",
        gender: ""
      },
      current: "",
      currentData: ""
    };
  }

  handleIconClick = (iconName) => {
    const { user } = this.state;
    const filteredValues = Object.entries(user).filter(([key, value]) => {   
      return  key === iconName;
    });

    this.setState((prevState) => ({
      setActiveIcon: prevState.setActiveIcon === iconName ? '' : iconName,
      current: iconName,
     currentData: filteredValues[0][1],
    }));
    console.log(this.state.current)
  };

  getData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api")
      const { cell, email, name, location, gender } = response.data.results[0]
      this.setState((prevState) => ({
        prevState,
        user: {
          cell: cell,
          email: email,
          name: name.first+" "+ name.last,
          location: location.city,
          gender: gender,
        }
      }));
    } catch (e) {
        console.log(e)
    }
  }

  render() {
    return (
      <>
        <div style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: 'gray', height: '20vh', display: 'flex', justifyContent: 'center' }}>

            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <img
                src="/images.jpeg"
                alt="Imagen"
                style={{
                  height: '150px', width: '150px', borderRadius: '50%', border: '5px solid white'
                }}
              />
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '15vh', color: 'black' }}>{`My ${!!this.state.current ? this.state.current: 'user'} is `}</p>
          <p style={{ textAlign: 'center', marginTop: '1vh', color: 'black', fontSize: '26px', fontWeight: 'unset' }}>{!!this.state.setActiveIcon ? this.state.currentData : ''}</p>
          <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaUserAlt size={24} color={this.state.setActiveIcon === 'name' ? 'red' : 'black'} style={{ marginRight: '10px' }} onClick={() => this.handleIconClick('name')} />
            <FaEnvelope color={this.state.setActiveIcon === 'email' ? 'red' : 'black'} size={24} style={{ marginRight: '10px' }} onClick={() => this.handleIconClick('email')} />
            <FaRegListAlt color={this.state.setActiveIcon === 'gender' ? 'red' : 'black'} size={24} style={{ marginRight: '10px' }} onClick={() => this.handleIconClick('gender')} />
            <FaMapMarkedAlt color={this.state.setActiveIcon === 'location' ? 'red' : 'black'} size={24} style={{ marginRight: '10px' }} onClick={() => this.handleIconClick('location')} />
            <FaPhoneAlt color={this.state.setActiveIcon === 'cell' ? 'red' : 'black'} size={24} style={{ marginRight: '10px' }} onClick={() => this.handleIconClick('cell')} />
            <FaLock color={this.state.setActiveIcon === 'lock' ? 'red' : 'black'} size={24} style={{ marginRight: '10px' }} onClick={() => this.handleIconClick('lock')} />
            <FaDownload color={'black'} size={24} style={{ marginRight: '10px' }} onClick={() => this.getData()} />
          </div>

        </div>
      </>
    );
  }
}