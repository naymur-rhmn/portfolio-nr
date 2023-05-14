import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import styled from 'styled-components';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <Appp>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </Appp>
  );
}

export default App;

const Appp = styled.div`
  background-color: var(--bg-navy);
  min-height: 100vh;
  /* padding: 0 2rem;
  @media (max-width: 992px) {
    padding: 0;
  } */
`;
