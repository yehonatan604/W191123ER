import { Route, Routes } from 'react-router-dom';

import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import { lazy } from 'react';

function wait(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}
const About = lazy(() => wait(1000).then(() => import('./About')));
const Contact = lazy(() => wait(1000).then(() => import('./Contact')));

export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
