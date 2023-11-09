import './App.css';
import { Route, Routes } from 'react-router-dom';
import Acceuil from './components/Acceuil';
import DetailsCountry from './components/DetailsCountry';
import NotFound from './components/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<Acceuil />} />
        <Route path='countries' element={<Acceuil />} />
        <Route path='countries/:name' element={<DetailsCountry />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
