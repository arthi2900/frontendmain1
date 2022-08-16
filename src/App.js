import { Route,Switch,useHistory } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Menu } from './pages/menu/menu';
import { Home } from './pages/home/home';
import {Register} from './auth/register/register';
import {Login} from './auth/login/login';
function App() {
  const history=useHistory();
  const [token,setToken]=useState(localStorage.getItem("x-auth-token"))
  const [data,setData]=useState(null); 
    return (
    <div className="App">
     
      <>
  <Menu/>
          <Switch>
      <Route path="/auth/login"><Login/></Route>
      <Route path="/auth/register"><Register/></Route>
      <Route path="/user/home"><Home/></Route>
     </Switch>
      </>
    </div>
  );
}
export default App;
