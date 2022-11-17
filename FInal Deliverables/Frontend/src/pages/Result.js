import axios from 'axios';
import React, { useState } from 'react';
import './Results.css';
import { Link } from 'react-router-dom';


function Results() {
  const predictionObject = JSON.parse(sessionStorage.getItem('prediction'));
  const [saveState, setSaveState] = useState(false);
  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  };
  function saveResult() {
    axios.put('http://127.0.0.1:8000/save_result', predictionObject, { headers })
      .then(() => setSaveState(true))
      .catch((ex) => console.log(ex)); // eslint-disable-line no-console
  }

  return (
    <div className="main">
      <h1>Based on the parameters provided, our ML model has predicted the {predictionObject.prediction} of heart disease</h1>
      <div className="button-container">
        {saveState ? (<h3>Your result has been successfully saved</h3>)
          : (
            <>
              <h3>Do you want to save the results?</h3>
              <button type="submit" onClick={saveResult}>Save</button>
            </>
          )}
        <Link to="/dashboard">
          <button type="submit">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Results;