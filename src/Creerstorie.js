import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from './Header'
import './Creerstorie.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Creerstorie() {
  const [nomStorie, setNomStorie] = useState('');

  const [nbPEStorie, setNbPEStorie] = useState('');
  const [stories, setStories] = useState([]);

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
    const data = localStorage.getItem('stories');
    if (data) {
      setStories(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomStorie && nbPEStorie) {
      setStories([...stories, { nomStorie, nbPEStorie }]);
      localStorage.setItem('stories', JSON.stringify([...stories, { nomStorie, nbPEStorie }]));
      setNomStorie('');
      setNbPEStorie('');

      axios.post('http://localhost:2000/createstorie', {
        nomStorie: nomStorie,
        nbPEStorie: nbPEStorie
      }).then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          console.log(error);
        })

    } else {
      alert("Veuillez remplir tous les champs avant de soumettre.");
    }
  };



  return (
    <div style={{ padding: '20px' }}>
      <center>
        <Header />
        <br />
        <TextField
          required
          id="NomStorie"
          label="Nom de la Storie:"
          value={nomStorie}
          onChange={(e) => setNomStorie(e.target.value)}
        />
        <br />
        <br />


        <TextField
          required
          id="NbPEStorie"
          label="Nombre PE:"
          type="number"
          value={nbPEStorie}
          onChange={(e) => setNbPEStorie(e.target.value)}
        />

        <br />
        <br />

        <Button variant="contained" onClick={handleSubmit}>Créer Storie</Button>

        <br />
        <br />
        <a href="/stories">
          <Button variant="contained">Voir Stories</Button>
        </a>
      </center>
    </div>
  );
}
export default Creerstorie;