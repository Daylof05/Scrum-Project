import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Header from './Header';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Questionnaire() {

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

        <TextField
          id="answer"
          margin="normal"
          defaultValue="Réponse correcte"
          InputProps={{
            readOnly: true,
          }}
        />

        <br></br><br></br>

        <TextField
          id="story_answer"
          margin="normal"
          defaultValue="La story progresse!"
          InputProps={{
            readOnly: true,
          }}
        />

        <br></br><br></br>

        <a href="/dailyquestionnaire">
          <Button variant="contained">Retour</Button>
        </a>
      </center>
    </div>
  );
}

export default Questionnaire;
