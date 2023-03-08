import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Route path="" component={}/>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
