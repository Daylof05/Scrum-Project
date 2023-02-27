import './App.css';
import Button from '@mui/material/Button';
import React from 'react';
import TextField from '@mui/material/TextField';
import Header from './Header';
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function App() {

const partyName = localStorage.getItem("partyName");
const partyCode = localStorage.getItem("partyCode");

useEffect(() => {
  setTimeout(() => {


    axios.post('http://localhost:2000/partie')
      .then(function (response) {
        console.log (response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    axios.post('http://localhost:2000/user')
      .then(function (response) {
        console.log (response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    
  }, 3000);
}, []);


  return (
    <div>
      <center>

      <Header/>

        <TextField
          id="party-name"
          margin="normal"
          label="Nom de la partie"

          defaultValue={partyName}
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br>
        <TextField
          id="party-code"
          margin="normal"
          label="Code de la partie"
          defaultValue={partyCode}
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br><br></br>
        <a href='/Creersprint'>
          <Button variant="contained">Gérer les sprints</Button>
        </a>
        <br></br><br></br>
        <a href="/Creerstorie">
          <Button variant="contained">Gérer les stories</Button>
        </a>
        <br></br><br></br>
        <a href="/dailyquestionnaire">
          <Button variant="contained">Participer au Daily</Button>
        </a>
        <br></br><br></br>
        <a href="/participants">
          <Button variant="contained">Gérer les participants</Button>
        </a>
        <br></br><br></br>
        <a href="/Creerdaily">
          <Button variant="contained">Gérer le Daily</Button>
        </a>
        <br></br><br></br>
        <a href="/">
          <Button variant="contained">Quitter la partie</Button>
        </a>
      </center>
    </div>
  );
}
