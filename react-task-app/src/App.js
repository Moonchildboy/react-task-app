import React from 'react';
import AuthContainer from './AuthContainer'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    
    return (
      <div className="App">
       <AuthContainer />
      </div>
    )
  }
  
}

export default App;
