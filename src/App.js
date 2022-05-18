import './App.css';
import { Principal } from './components/Principal';
import { ProjectsSpace } from './components/ProjectsSpace';
import { AboutMe } from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Principal />
      <AboutMe />
      <ProjectsSpace />
    </div>
  );
}

export default App;
