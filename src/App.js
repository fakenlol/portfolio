import './App.css';
import { Encabezado } from './components/NavBar.js';
import { Presentation } from './components/Presentation.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Presentation />
    </div>
  );
}

export default App;
