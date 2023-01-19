import About from './components/About';

import Header from './components/Header'
import Services from './components/Services';
import Footer from './components/Footer';
import Technologies from './components/Technologies';
import Projects from './components/Projects';



function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />

      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
