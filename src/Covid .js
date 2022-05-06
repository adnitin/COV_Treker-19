//  
import React, { useEffect, useState } from "react";
import axios from "axios";
import './Covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
    
        const options = {
            method: 'GET',
            url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
            headers: {
              'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com',
              'X-RapidAPI-Key': '10b8dd9c3emshe9b2e2ac76dfc77p132042jsn488866dc445b'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setData(response.data.countries_stat[1]);
          }).catch(function (error) {
              console.error(error);
          });
    }
    //console.log(response.data.countries_stat[1]);
    //setData(response.data.countries_stat[1]);
    useEffect(() => {
        getCovidData();
    }, []);
// eslint-disable-next-line
    return (
        <> <h5>By ADnitin </h5>
            <h1> 😟 LIVE  COVID TRACKER APP</h1>
            <div className="container" >

                <div className="card">
                    <div className="card__main">
                        <div className="card__inner "></div>
                        <p className="card__name"><span> OUR </span> COUNTRY </p>
                        <p className="card__total_card__small"> {data.country_name} </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card__main">
                        <div className="card__inner "></div>
                        <p className="card__name"><span> TOTAL  </span> RECOVERED </p>
                        <p className="card__total_card__small">{data.total_recovered} </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card__main">
                        <div className="card__inner "></div>
                        <p className="card__name"><span> TOTAL </span> CONFIRMED </p>
                        <p className="card__total_card__small"> {data.cases}</p>
                    </div>
                </div>

                
               
           

            
            <div className="card">
                    <div className="card__main">
                        <div className="card__inner "></div>
                        <p className="card__name"><span> TOTAL </span> DEATHS </p>
                        <p className="card__total_card__small"> {data.deaths} </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card__main">
                        <div className="card__inner "></div>
                        <p className="card__name"><span> TOTAL </span> ACTIVE</p>
                        <p className="card__total_card__small">{data.active_cases}</p>
                    </div>
                </div>


                <div className="card">
                    <div className="card__main">
                        <div className="card__inner "></div>
                        <p className="card__name"><span> TOTAL </span> TESTS </p>
                        <p className="card__total_card__small">{data.total_tests} </p>
                    </div>
                </div>
            </div>


        </>);
}
export default Covid;