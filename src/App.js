import './App.css';
import store from './Store'
import { Provider } from 'react-redux'
import Header from './Component/Header';
import Home from './Component/Home';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from './Component/LoginPage';



function App() {
  return (
    <div className="App">
    
       <Provider store={store}>
        
        <BrowserRouter>
          <Switch>
          <Redirect path="/" to="/Home" exact />
           <Route path="/Home"  component={Home} />
           <Route path="/login" component={LoginPage}/>
          </Switch>
        </BrowserRouter>
     
      </Provider> 
    </div>
  );
}

export default App;
