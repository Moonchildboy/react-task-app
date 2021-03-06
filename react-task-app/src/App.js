import React from 'react';

import AuthContainer from './AuthContainer'
import LoginContainer from './LoginContainer'
import TaskContainer from './TaskContainer'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loggedIn: false,
    }
  }

login = async (log) => {
  console.log("this is the login param", log);

  const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'

  try {
    const loginResponse = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(log), 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("this is the server res",loginResponse);

    const loginJson = await loginResponse.json()
    if (loginResponse === 200) { 
      this.setState({
          loggedIn: true,
          loggedInEmail: loginJson.data.email
        })
    }
    console.log("this is the Json res",loginJson);

  } catch (err){
      if (err) {
        console.error(err);
    }
  }
}

register = async (reg) => {

  console.log("this is the register body", reg);
  const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'
  // const url = 'http://localhost:8000/api/v1/users/register'
  try {
    const registerResponse = await fetch(url, {
      method:'POST',
      credentials:'include',
      body:JSON.stringify(reg),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const registerJson = await registerResponse.json()
  
  } catch (err){
      if (err) {
        console.error(err);
    }
  }
}

logout = async (user) => {
  console.log("hitting the logout function");
  const url = process.env.REACT_APP_API_URL + '/api/v1/users/logout'
  try {
    const registerResponse = await fetch(url, {
      method:'GET',
      credentials:'include',
      // body:JSON.stringify(user),
      // headers: {
        // 'Content-Type': 'application/json'
      // }
    })
    const registerJson = await registerResponse.json()
  
  } catch (err){
      if (err) {
        console.error(err);
    }
  }
} 

  render(){

    return (
      <div className="App">
      <nav>
        <button onClick={this.logout}>logout</button>
       </nav>
        <AuthContainer login={this.login} register={this.register}/>  
        <TaskContainer />

      </div>
    )
  }  
}

export default App;
