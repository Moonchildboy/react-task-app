import React from 'react';
import AuthContainer from './AuthContainer'
import LoginContainer from './LoginContainer'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loggedIn: false,
      loggedInEmail: null // will using password as the key be problematic? 
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
    const loginJson = await loginResponse.json()
    if (loginResponse === 200) { 
      this.setState({
          loggedIn: true,
          loggedInEmail: loginJson.data.email
        })
    }
  } catch (err){
      if (err) {
        console.error(err);
    }
  }
}

register = async (reg) => {

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
  render(){
    return (
      <div className="App">
       <AuthContainer register={this.register}/>
       <LoginContainer login={this.login}/>
      </div>
    )
  }  
}

export default App;
