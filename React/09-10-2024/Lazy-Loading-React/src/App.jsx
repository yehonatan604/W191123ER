import { Outlet } from 'react-router-dom';
import Header from './Header';
// import RouterComponent from './RouterComponent';
import React, { Suspense } from 'react';

// import { Suspense } from 'react';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <RouterComponent />
      </Suspense> */}
      <footer>This is a footer...</footer>
    </>
  );
}

export default App;
