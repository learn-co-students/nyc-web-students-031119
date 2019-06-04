import React, { Component } from 'react';

import NoteView from './components/NoteView';
import NoteInput from './components/NoteInput';
import SubjectTabs from './components/SubjectTabs';
import Login from './components/Login';
import Signup from './components/Signup';

import { getAllSubjects, autoLogin } from './actions/userActions'

import {connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token')
    // const isLoggedIn = this.props
    if (token && !this.props.user) {
      
      // how can we make this work?
      // this.props.autoLogin() 
      console.log('shoudl hit this')
      fetch('http://localhost:4000/api/v1/auto_login', {
        headers: {
          // Authorization: `Bearer ${token}`
          Authorization: `${token}`
        }
        // method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
    }

    // fetch('http://localhost:4000/api/v1/subjects')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)

    //     this.props.getAllSubjects(data)
    //   })
  }

  render() {
    console.log('app props', this.props)
    return (
      <div className="ui centered container">
        <h1 className="ui header centered">
          
        </h1>
        
        {/* if someone is logged in hide this and welcome the user! */}

        {
          // false
          !!this.props.user 
          // were going to check our redux state if were logged
            ? <div className="ui segment">
                <SubjectTabs />
                <NoteView />
                <NoteInput />
              </div>
            : <>
                <Signup />
                <Login />
              </>
        }


      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('WHAT DOES OUR INITIAL STATE NOW LOOK LIKE', state)
  return {
    // isLoggedIn: !!state.usersReducer.user,
    user: state.usersReducer.user
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     autoLogin: () => autoLogin(dispatch)
//   }
// }
export default connect(mapStateToProps, { autoLogin })(App)
