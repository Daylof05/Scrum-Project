import './NewDaily.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Header from './Header';
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function NewDaily() {

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

  return (
    <div>
      <center>
        <Header />

        <TextField
          id="party-name"
          margin="normal"
          label=""
          defaultValue="Nom de la partie"
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br>
        <TextField
          id="party-code"
          margin="normal"
          label=""
          defaultValue="Code:"
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br><br></br>
        <a href="/Daily">
          <Button variant="contained">Démarrer le Daily</Button>
          <br></br><br></br>
        </a>
        <a href="/app">
          <Button variant="contained">retour</Button>
          <br></br><br></br>
        </a>
      </center>
    </div>
  );
}