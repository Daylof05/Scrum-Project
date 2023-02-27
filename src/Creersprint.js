import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from './Header'
import './Creersprint.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Creersprint() {
  const [numSprint, setNumSprint] = useState('');
  const [dateSprint, setDateSprint] = useState('');
  const [dureeSprint, setDureeSprint] = useState('');
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    setTimeout(() => {


      axios.post('http://localhost:2000/partie')
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      axios.post('http://localhost:2000/user')
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    }, 3000);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('sprints');
    if (data) {
      setSprints(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSprints([...sprints, { numSprint, dateSprint, dureeSprint }]);
    localStorage.setItem('sprints', JSON.stringify([...sprints, { numSprint, dateSprint, dureeSprint }]));
    setNumSprint('');
    setDateSprint('');
    setDureeSprint('');

    axios.post('http://localhost:2000/createsprint', {
      numSprint: numSprint,
      dateSprint: dateSprint,
      dureeSprint: dureeSprint
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      })

  };



  return (
    <div style={{ padding: '20px' }}>
      <center>
        <Header />
        <br />
        <TextField
          required
          id="NumSprint"
          label="Numéro du Sprint:"
          type="number"
          value={numSprint}
          onChange={(e) => setNumSprint(e.target.value)}
        />
        <br />
        <br />

        <TextField
          required
          id="DateSprint"
          label=""
          type="date"
          value={dateSprint}


          onChange={(e) => setDateSprint(e.target.value)}
        />
        <br />
        <br />

        <TextField
          required
          id="DureeSprint"
          label="Durée du sprint en semaines:"
          type="number"
          value={dureeSprint}
          onChange={(e) => setDureeSprint(e.target.value)}
        />

        <br />
        <br />

        <Button variant="contained" onClick={handleSubmit}>Créer Sprint</Button>

        <br />
        <br />
        <a href="/sprints">
          <Button variant="contained">Voir Sprints</Button>
        </a>
      </center>
    </div>
  );
}
export default Creersprint;