import React ,{useState} from 'react';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import './App.css';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
     <Homepage/>
     <Login setLoginUser={setLoginUser}/>
     <Register/>
    </div>
  );
}

export default App;
