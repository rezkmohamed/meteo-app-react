import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import { Route, Routes } from 'react-router-dom';

/**
 * QUESTA E' LA VERSIONE 6+ DI react-router-dom.
 * PER QUESTO MOTIVO E' LEGGERMENTE DIVERSO DAI VECCHI PROGETTI.
 */

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/*" exact element={<LandingPage />} />
        {/* <Route path="/today" exact element={<MeteoPage />}/> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
