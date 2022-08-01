import './App.css';
import Characters from './pages/Characters';
import Character from './pages/Character';
import {Route, Routes} from 'react-router';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<Characters />}/>
        <Route strict exact path="/search" element={<Search />}/>
        <Route strict exact path="/:id" element={<Character />}/>
      </Routes>
    </div>
  );
}

export default App;
