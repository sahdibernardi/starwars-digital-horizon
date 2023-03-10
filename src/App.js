import { Route } from 'react-router-dom';
import EachStarship from './components/EachStarship';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Home }/>
      <Route path="/planets" component={ Planets }/>
      <Route path="/starships" component={ Starships }/>
      <Route path="/each-starship" component={ EachStarship }/>
      <Route path="/people" component={ People }/>
    </div>
  );
}

export default App;
