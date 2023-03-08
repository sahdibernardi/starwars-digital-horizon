import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Route exact path="/" component={ Home }/>
        <Route path="/planets" component={ Planets }/>
        <Route path="/starships" component={ Starships }/>
        <Route path="/people" component={ People }/>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
