import logo from './logo.svg';
import { Route } from 'wouter';
import './App.css';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';

function App() {
  return (
    <div>
        <Route path="/"><Home/></Route>
        <Route path="/contacto"><Form/></Route>
         

    </div>
  );
}

export default App;
