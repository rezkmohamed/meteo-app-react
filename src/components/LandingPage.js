import React from 'react';
import classes from "./LandingPage.module.css";
import Navbar from './UI/Navbar';

const LandingPage = (props) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    console.log(`${yyyy}-${mm}-${dd}`);

    return (
        <React.Fragment>
            <div className={classes.main}>
                <Navbar />
            </div>
        </React.Fragment>
    );
}

export default LandingPage;