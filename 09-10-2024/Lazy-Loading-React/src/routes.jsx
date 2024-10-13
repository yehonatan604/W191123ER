// import About from './About';
import App from './App';
// import Contact from './Contact';
import Home from './Home';

import { lazy } from 'react';

function wait(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}
const About = lazy(() => wait(1000).then(() => import('./About')));
const Contact = lazy(() =>
  wait(1000).then(() =>
    import('./Contact').then((module) => ({ default: module.Contact }))
  )
);

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
];
