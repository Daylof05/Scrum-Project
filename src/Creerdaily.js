import Button from '@mui/material/Button';
import * as React from 'react';
import './Creersprint.css';
import Header from './Header';

function Creersprint() {
  return (
    <div>
      <center>
        <Header />

        <br></br><br></br>
        <a href="/daily">
          <Button variant="contained">Créer un daily</Button>
        </a>
        <br></br><br></br>
        <a href="/app">
          <Button variant="contained">Retour</Button>
        </a>
        <br></br>        
      </center>
    </div>
    
      

    
  );
}

export default Creersprint;
