/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPageCommons.css';

function PredictionPage() {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [chestPainType, setChestPainType] = useState('');
  const [bp, setBp] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [fbs, setFbs] = useState('');
  const [ekg, setEkg] = useState('');
  const [maxHr, setMaxHr] = useState('');
  const [angina, setAngina] = useState('');
  const [stDepression, setStDepression] = useState('');
  const [slopeOfSt, setSlopeOfSt] = useState('');
  const [fluro, setFluro] = useState('');
  const [thallium, setThallium] = useState('');
  const navigate = useNavigate();

  function predictResult(event) {
    event.preventDefault();
    if (age && sex && chestPainType && bp && cholesterol && fbs && ekg && maxHr && angina && stDepression && slopeOfSt && fluro && thallium) {
      const predictionParams = {
        age,
        sex,
        chest_pain_type: chestPainType,
        bp,
        cholesterol,
        fbs_over_120: fbs,
        ekg_results: ekg,
        max_hr: maxHr,
        exercise_angina: angina,
        st_depression: stDepression,
        slope_of_st: slopeOfSt,
        number_of_vessels_fluro: fluro,
        thallium,
      };
      const headers = {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      };
      axios.post('http://127.0.0.1:8000/predict', predictionParams, { headers })
        .then((response) => {
          predictionParams.prediction = response.data.prediction;
          [predictionParams.date, predictionParams.time] = new Date().toLocaleString().split(', ');
          sessionStorage.setItem('prediction', JSON.stringify(predictionParams));
          navigate('/results');
        }) // eslint-disable-line no-console
        .catch((ex) => console.log(ex)); // eslint-disable-line no-console
    }
  }
  return (
    <div className="main-container">
      <form className="main-form" onSubmit={predictResult}>
        <div className="title">Enter your details</div>
        <div className="form-input">
          <p>Age</p>
          <input type="number" name="Age" id="text-input" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-input">
          <p>Sex</p>
          <select
            name="sex"
            id="sel-input"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="-1">--Select Value--</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>
        <div className="form-input">
          <p>Chest Pain Type</p>
          <select
            name="chest-pain"
            id="sel-input"
            value={chestPainType}
            onChange={(e) => setChestPainType(e.target.value)}
          >
            <option value="-1">--Select Value--</option>
            <option value="1">Typical Angina</option>
            <option value="2">Atypical Angina</option>
            <option value="3">Non Anginal Pain</option>
            <option value="4">Asymptomatic Pain</option>
          </select>
        </div>
        <div className="form-input">
          <p>Blood Pressure</p>
          <input type="number" className="form__field" name="bp" id="text-input" value={bp} onChange={(e) => setBp(e.target.value)} />
        </div>
        <div className="form-input">
          <p>Cholesterol</p>
          <input type="number" name="cholesterol" id="text-input" value={cholesterol} onChange={(e) => setCholesterol(e.target.value)} />
        </div>
        <div className="form-input">
          <p>Fasting Blood Sugar Over 120</p>
          <select
            name="fbs"
            id="sel-input"
            value={fbs}
            onChange={(e) => setFbs(e.target.value)}
          >
            <option value="-1">--Select Value--</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-input">
          <p>EKG Results</p>
          <select
            name="ekg"
            id="sel-input"
            value={ekg}
            onChange={(e) => setEkg(e.target.value)}
          >
            <option value="-1">--Select Value--</option>
            <option value="0">Normal</option>
            <option value="1">Having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of greater than 0.05 mV)</option>
            <option value="2">Showing probable or definite left ventricular hypertrophy by Estes`&apos;` criteria</option>
          </select>
        </div>
        <div className="form-input">
          <p>Maximum Heart Rate</p>
          <input type="number" name="mhr" id="text-input" value={maxHr} onChange={(e) => setMaxHr(e.target.value)} />
        </div>
        <div className="form-input">
          <p>Exercise Induced Angina</p>
          <select
            name="angina"
            id="sel-input"
            value={angina}
            onChange={(e) => setAngina(e.target.value)}
          >
            <option value="-1">--Select Value--</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-input">
          <p>ST Depression</p>
          <input type="number" name="stdep" id="text-input" value={stDepression} onChange={(e) => setStDepression(e.target.value)} />
        </div>
        <div className="form-input">
          <p>Slope of ST</p>
          <select
            name="slope-st"
            id="sel-input"
            value={slopeOfSt}
            onChange={(e) => setSlopeOfSt(e.target.value)}
          >
            <option value="-1">--Select Value--</option>
            <option value="1">Upsloping</option>
            <option value="2">Flat</option>
            <option value="3">Downsloping</option>
          </select>
        </div>
        <div className="form-input">
          <p>Number of major vessels colored by Flouroscopy</p>
          <select
            name="fluro"
            id="sel-input"
            value={fluro}
            onChange={(e) => setFluro(e.target.value)}
          >
            <option value="-1">--Select Value--</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="form-input">
          <p>Thallium</p>
          <select
            name="thallium"
            id="sel-input"
            value={thallium}
            onChange={(e) => setThallium(e.target.value)}
          >
            <option value="-1">--Select Value--</option>
            <option value="3">Normal</option>
            <option value="6">Fixed Defect</option>
            <option value="7">Reversable Defect</option>
          </select>
        </div>
        <button type="text" className="submit">Submit</button>
      </form>
    </div>
  );
}

export default PredictionPage;