import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import './home.scss';
import maxhrchest from '../assets/maxhrchest.png'
import maxhrage from '../assets/maxhrage.png'

const Maxhr = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <h1>Max Heart Rate Visualizations</h1>
                <br />
                <h3>Max HR by Chest pain type</h3>
                <br />
                <p>Here 1 refers to Typical Angina; 2 - Atypical Angina; 3 - Non anginal pain; 4 - Asymptotic pain</p>
                <p>Max HR is high for atypical angina</p>
                <p>Overall the chest pain types, the average max hr is 149.7</p>
                <br />
                <img src={maxhrchest} alt="" width={800} />
                <br /><br />
                <h3>Max HR by Age</h3>
                <br />
                <img src={maxhrage} alt="" width={800} />
                <br /><br />
            </div>
        </div>
    )
}

export default Maxhr