import './Daily.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Header from './Header';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Daily() {

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
        <h1>Ont parlé :</h1>
        <TextField
          id="player1"
          margin="normal"
          label=""
          defaultValue="Player 1"
          InputProps={{
            readOnly: true,
          }}

        />
        <br></br>
        <TextField
          id="player2"
          margin="normal"
          label=""
          defaultValue="Player 2"
          InputProps={{
            readOnly: true,
          }}

        />
        <TextField
          id="player3"
          margin="normal"
          label=""
          defaultValue="Player 3"
          InputProps={{
            readOnly: true,
          }}

        />
        <br></br><br></br>
        <a href="/daily">
          <Button variant="contained">Clotûrer le Daily</Button>
        </a>
        <br></br><br></br>
        <a href="/app">
          <Button variant="contained">retour</Button>
        </a>
        <br></br><br></br>
      </center>
    </div>
  );
}

export default Daily;