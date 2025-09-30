// import React, { useEffect } from 'react';
// import Header from './components/Header';
// import Home from './components/Home';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Loader from './components/Loader';

// const App = () => {

//   useEffect(() => {
//  AOS.init({ duration: 900, easing: 'ease-out', once: true });
// }, []);

//   return (
//     <div>
//       <Loader/>
//       <Header/>
//       <Home/>
//       <About/>
//       <Projects/>
//       <Contact/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Skills from './components/Skills';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Skills/>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
