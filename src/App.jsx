import Header from './components/Header';
import Main from './components/Main';

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
