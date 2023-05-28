import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import styled from 'styled-components';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Application>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Application>
  );
}

export default App;

const Application = styled.div`
  background-color: var(--bg-navy);
  min-height: 100vh;
`;
