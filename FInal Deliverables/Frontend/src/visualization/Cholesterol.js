import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import './home.scss';
import choleage from '../assets/choleage.png'
import cholepain from '../assets/cholepain.png'
import cholekg from '../assets/cholekg.png'

const Cholesterol = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <h1>Cholesterol Visualizations</h1>
                <br />
                <h3>Cholesterol by Age</h3>
                <br />
                <p>Over all the ages, the average of cholesterol is 249.7</p>
                <p>The average values of Cholesterol range from 196, occurring when Age is 34, to 304, when Age is 77.</p>
                <br />
                <img src={choleage} alt="" width={800} />
                <br /><br />
                <h3>Cholesterol by Chest pain type</h3>
                <br />
                <p>Here 1 refers to Typical Angina; 2 - Atypical Angina; 3 - Non anginal pain; 4 - Asymptotic pain</p>
                <p>Cholesterol seems to be high for asymptotic pain.</p>
                <br />
                <img src={cholepain} alt="" width={800} />
                <br /><br />
                <h3>Cholesterol by Electrocardiogram Results</h3>
                <br />
                <p>0 - Normal; 1 - Having ST-T wave abnormality T wave inversions and/or ST elevation or depression of greater than 0.05 mV; 2 - Showing probable or definite left ventricular hypertrophy by Estes's criteria</p>
                <p>Cholesterol's high for type 1</p>
                <br />
                <img src={cholekg} alt="" width={800} />
            </div>
        </div>
    )
}

export default Cholesterol