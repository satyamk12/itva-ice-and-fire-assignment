import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { Route, Routes } from "react-router-dom"
import Houses from './Components/Main/Houses/Houses';
import Characters from './Components/Main/Characters/Characters';
import Books from './Components/Main/Books/Books';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="/books" element={ <Books/> }/>
        <Route path="/characters" element={ <Characters/> }/>
        <Route path="/houses" element={ <Houses/> }/>
      </Routes>

    </div>
  );
}

export default App;
