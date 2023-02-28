import './Accueil.css';
import Button from '@mui/material/Button';
import * as React from 'react';

export default function Accueil() {
  return (

   <div>

      <center>
      <img className='logo' src="Scrumylogo.png"></img>
      <br></br>

        
          <Button  href='/CreateParty' variant="contained">Créer une partie</Button>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/joinparty">
          <Button   variant="contained">Rejoindre une partie</Button>
        </a>
        </center>


    </div>
  );
}