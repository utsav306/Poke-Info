
import './App.css';

import {Routes,Route} from 'react-router-dom';
import PokemonDetails from './Components/PokemonDetails';
import Navbar from './Components/Navbar.tsx';
import Card from './Components/Card.jsx';
import { PokemonDataProvider } from './Components/PokemonDataProvider.jsx';
function App() {
  return (
  <>
  <PokemonDataProvider>
  <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Card></Card>}></Route>
      <Route path="/pokemon/:name" element={<PokemonDetails></PokemonDetails>}></Route>
    </Routes>
    </PokemonDataProvider>
  </>
  );
}

export default App;
