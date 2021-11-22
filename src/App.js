
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Allorder from './Component/Allorder/Allorder';
import Footer from './Component/Footer/Footer';
import Hader from './Component/Hader/Hader';
import Home from './Component/Home/Home';
import Insert from './Component/Insert/Insert';
import Login from './Component/Login/Login';
import Myorder from './Component/Myorder/Myorder';
import Order from './Component/Order/Order';
import Privet from './Component/PrivetRoute/Privet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Hader></Hader>
      <Switch>
      <Route exact path='/'>
        <Home></Home>
        </Route>

        <Privet exact path='/order'>
        <Order></Order>
        </Privet>
        <Privet exact path='/order/:id'>
        <Order></Order>
        </Privet>
        <Privet exact path='/myorder'>
        <Myorder></Myorder>
        </Privet>
        <Privet exact path='/allorder'>
         <Allorder></Allorder>
        </Privet>
        
        <Route exact path='/Login'>
        <Login></Login>
        </Route>
        <Route exact path='/home'>
        <Home></Home>
        </Route>
        <Privet exact path='/insert'>
        <Insert></Insert>
        </Privet>
       </Switch>
       <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
