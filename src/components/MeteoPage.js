import React from 'react';
import classes from "./MeteoPage.module.css";
import { fetchDayForecastInstance } from '../services/meteo-api';
import { useState, useEffect } from 'react';
import Navbar from './UI/Navbar';

const MeteoPage = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const dateOfToday = `${yyyy}-${mm}-${dd}`;
    console.log(dateOfToday);
    const [meteoObj, setMeteoObj] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        fetchDayForecastInstance(dateOfToday)
        .then(res => {
            console.log(res);
            setMeteoObj(res);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
            setIsLoading(false);
        });
    }, [dateOfToday]);

    return (
        <React.Fragment>
            {
                isLoading && 
                <p>IS LOADING</p>
            }
            {
                !isLoading &&
                <section className={`${classes.opacity}`} >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4">

                            <div className="card" style={{"color": "#4B515D", "borderRadius": "35px"}}>
                            <div className="card-body p-4">

                                <div className="d-flex">
                                <h6 className="flex-grow-1">Torino Oggi</h6>
                                <h6>15:07</h6>
                                </div>

                                <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className="display-4 mb-0 font-weight-bold" style={{"color": "#1C2331"}}> 13°C </h6>
                                <span className="small" style={{"color": "#868B94"}}>Stormy</span>
                                </div>

                                <div className="d-flex align-items-center">
                                <div className="flex-grow-1" style={{"fontSize": "1rem"}}>
                                    <div><i className="fas fa-wind fa-fw" style={{"color": "#868B94"}}></i> <span className="ms-1"> 40 km/h </span></div>
                                    <div><i className="fas fa-tint fa-fw" style={{"color": "#868B94"}}></i> <span className="ms-1"> 84% </span></div>
                                    <div><i className="fas fa-sun fa-fw" style={{"color": "#868B94"}}></i> <span className="ms-1"> 0.2h </span></div>
                                </div>
                                <div>
                                    <img src={meteoObj.image24} width="100px" alt="img-weather" />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            }
        </React.Fragment>
    );
}

export default MeteoPage;