import './App.css';
import store from './Store'
import {Provider} from 'react-redux'
import Header from './Component/Header';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
       <Provider store={store}>   
     <Header/>
     <Home/>
     </Provider>
    </div>
  );
}

export default App;
