import './App.css';
import { NavBar } from "./components/NavBar";
import { Profile } from "./components/Profile";
import { Footer } from "./containers/Footer";
import { ProjectFeatureSection } from './containers/ProjectFeatureSection';
import { TitledSection } from './containers/TitledSection';

function App() {
  return (
    <div className="App bg-bg_day">
      <NavBar name="Colby Haskell" />
      <Profile />
      <ProjectFeatureSection />
      <TitledSection title={<h1 className="text-xl font-bold text-orange">Recent Projects</h1>} subtitle="An automated feed of my top GitHub projects!" />
      <Footer />
    </div>
  );
}

export default App;
