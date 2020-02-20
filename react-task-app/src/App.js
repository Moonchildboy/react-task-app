import React from 'react';
import AuthContainer from './AuthContainer'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loggedIn: false, 
    }
  }
register = async (reg) => {

  console.log("this is the register param", reg);

  // const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'
  const url = 'http://localhost:8000/api/v1/users/register'
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
  
  }catch (err){
    if (err) {
      console.error(err);
    }
  }
}
  render(){
    return (
      <div className="App">
       <AuthContainer register={this.register}/>
      </div>
    )
  }  
}

export default App;
