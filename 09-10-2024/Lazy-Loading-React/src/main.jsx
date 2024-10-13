import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';
import App from './App';

const router = createBrowserRouter(routes);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </StrictMode>
);
