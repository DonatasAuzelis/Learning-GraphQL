import './App.css';
import Characters from './pages/Characters';
import Character from './pages/Character';
import {Route, Routes} from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<Characters />}/>
        <Route strict exact path="/:id" element={<Character />}/>
      </Routes>
    </div>
  );
}

export default App;
