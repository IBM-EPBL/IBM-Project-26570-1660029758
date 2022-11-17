import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import './home.scss';
import thalage from '../assets/thalage.png';
import thalheart from '../assets/thalheart.png';

const Thallium = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <h1>Thallium</h1>
                <br />
                <h3>Thallium by Age</h3>
                <br />
                <p>Overall the ages, the average thallium is 4.696</p>
                <br />
                <img src={thalage} alt="" width={800} />
                <br /><br />
                <h3>Thallium by Heart Diseases Presence/Absence</h3>
                <br />
                <img src={thalheart} alt="" width={800} />
            </div>
        </div>
    )
}

export default Thallium