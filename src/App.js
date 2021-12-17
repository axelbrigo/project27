
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import { Header } from './Header';
import Playstation from './LastSection/Playstation';
import Playstation2 from './LastSection2';
import Playstation3 from './LastSection3';
import SignIn from './Register/Register.jsx'


import Stage from './Stage';


function App() {
  return (

    <BrowserRouter>

      <Header></Header>

      <Routes>


        <Route path="/" element={<><Stage /> <Playstation /><Playstation2 /><Playstation3 /></>} />
        <Route path="/menu" element={<><Playstation /> <Playstation2 /></>} />
        <Route path="/about" element={<Playstation3 />} />
        <Route path="/register" element={<SignIn />} />


      </Routes>


      <Footer></Footer>

    </BrowserRouter>


  );
}

export default App;
