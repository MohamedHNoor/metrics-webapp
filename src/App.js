import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import CountryDetalis from './components/country/Country';
import Header from './components/header/Header';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header>Most Views</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<CountryDetalis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
