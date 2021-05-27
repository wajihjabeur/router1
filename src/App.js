import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home'
import Description from './Description'

function App() {
  return (
        <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/Description' component={Description}/>
        </BrowserRouter>
  );
}

export default App

