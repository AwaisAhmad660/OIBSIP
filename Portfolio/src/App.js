import "./App.css";
import Nav from "./Components/nav";
import Work from "./Components/recntWorks";
import Services from "./Components/services";
import Collabration from "./Components/collaburation";
import { StartupProjects } from "./Components/startupProjects";
import Testmonial from "./Components/testmonial";
import Footer from "./Components/footer";
function App() {
  return (
    <>
      <Nav />
      <Services />
      <Work />
      <Collabration />
      <StartupProjects />
      <Testmonial />
      <Footer/>
    </>
  );
}

export default App;
