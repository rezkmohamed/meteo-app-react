import React from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from "./LandingPage.module.css";
import MeteoPage from './MeteoPage';
import HomePageText from './UI/HomePageText';
import Navbar from './UI/Navbar';

const LandingPage = () => {
    return (
        <React.Fragment>
            <div className={classes.main}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<HomePageText />}/>
                    <Route path="/today" exact element={<MeteoPage />} />
                </Routes>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;