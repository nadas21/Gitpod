import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hiro } from "./components/Hiro/hiro";
import { Project } from "./components/Project";
import { Nav } from "./components/Nav"
import { Logos } from "./components/Logos";
import { Get } from "./components/get";
import { Mark } from "./components/Mark"


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Project/>
        <Hiro/> 
        <Nav/>
        <Logos/>
        <Get/>
        <Mark/>
        {/* <Finish/> */}
      </main>
    </>
  );
}

export default App;
