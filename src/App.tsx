import './App.css';
import { NavBar } from "./components/NavBar";
import { Profile } from "./components/Profile";
import { Footer } from "./containers/Footer";
import { ProjectFeatureSection } from './containers/ProjectFeatureSection';
import { TitledSection } from './containers/TitledSection';

function App() {
  return (
    <div className="App">
      <NavBar name="Colby Haskell" />
      <Profile />
      <ProjectFeatureSection /> 
      <TitledSection title="Recent Projects" subtitle="An automated feed of my top GitHub projects!" />
      <Footer />
    </div>
  );
}

export default App;
