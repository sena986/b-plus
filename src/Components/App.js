import Nav from "Components/Nav";
import Top from "./Top";
import "./App.css";
import About from "./About";
import Recruit from "./Recruit";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Top />
      <About />
      <Recruit />
      <Footer />
    </div>
  );
}

export default App;
