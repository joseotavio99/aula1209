import OlaMundo from './components/OlaMundo'
import './App.css';
import Frases from './components/Frases';
import DigaMeuNome from './components/DigaMeuNome';


function App() {
  return (
    <div className="Container">
      <h1> Qual é meu nome</h1>
      <DigaMeuNome nome="kaue" />

    </div>
  );
}

export default App;
