import './App.css';
import { Content } from './Component/Content/Content';
import { Footer } from './Component/Footer/Footer';
import { NavBar } from './Component/Navigation/NavBar';


function App() {
  return (
    <div className="bg-zinc-900 flex flex-col justify-between h-screen">
      <NavBar/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
