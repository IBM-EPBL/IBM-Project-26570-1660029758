import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import './home.scss';
import heartchol from '../assets/heartchol.png'
import heartage from '../assets/heartage.png'
import hesexpre from '../assets/hesexpre.png'

const Heartdisease = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <h1>Heart Disease Factors Visualizations</h1>
                <br />
                <h3>Heart Disease by Cholesterol</h3>
                <br />
                <img src={heartchol} alt="" width={800} />
                <br />
                <h3>Heart Disease by Age</h3>
                <br />
                <img src={heartage} alt="" width={800} />
                <br />
                <h3>Heart Disease by Sex</h3>
                <br />
                <p>Heart diseases occur more in men in comparison to women according to our data.</p>
                <br />
                <img src={hesexpre} alt="" width={800} />
            </div>
        </div>
    )
}

export default Heartdisease