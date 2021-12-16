
import './App.css';
import Footer from './Footer/Footer';
import { Header } from './Header';
import Playstation from './LastSection/Playstation';
import Playstation2 from './LastSection2';
import Playstation3 from './LastSection3';




import Stage from './Stage';


function App() {
  return (

    <div className='medida'>
      <Header></Header>
      <Stage></Stage>
      <Playstation></Playstation>
      <Playstation2></Playstation2>
      <Playstation3></Playstation3>
      <Footer></Footer>

    </div>



  );
}

export default App;
