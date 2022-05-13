import './App.css';
import { Encabezado } from './components/NavBar.js';
import { Presentation } from './components/Presentation.js';
import { ProjectsSpace } from './components/ProjectsSpace.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Presentation />
      <ProjectsSpace />
    </div>
  );
}

export default App;
