import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function JoinParty() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [playerType, setPlayerType] = useState("");

    const handlePlayerTypeChange = (event) => {
        setPlayerType(event.target.value);
    };

  const handleClick = (playerType) => {
    const userName = document.getElementById("pseudo_player").value;
    const partyCode = document.getElementById("party_code").value;

    if (userName === "") {
      alert("Veuillez entrer un nom d'utilisateur");
      return;
    }

    axios.post('http://localhost:2000/joinparty', {
      partyCode: partyCode,
      playerName: userName,
      playerType: playerType
    }).then(function (response) {
      console.log(response);
      localStorage.setItem("partyCode", partyCode);
      localStorage.setItem("userName", userName);
      localStorage.setItem("partyName", response.data.partyName);
      navigate('/app');
    })
      .catch(function (error) {
        console.log(error);
      })

  }

  return (
    <div>
      <center>
        <form action="" method="get" className="form" autoComplete='false'>
          <br></br>

          <TextField
            required
            id="party_code"
            label="Code de la partie:"
            defaultValue=""
            {...register("code")}
          />

          <br></br><br></br>

          <TextField
            required
            id="pseudo_player"
            label="Votre pseudo:"
            defaultValue=""
            {...register("pseudo")}
          />

          <br></br><br></br>

          <FormControl component="fieldset">
            <RadioGroup value={playerType} onChange={handlePlayerTypeChange}>
              <FormControlLabel value="TEAM" control={<Radio />} label="TEAM" />
              <FormControlLabel value="PO" control={<Radio />} label="PO" />
              <FormControlLabel value="SM" control={<Radio />} label="SM" />
            </RadioGroup>
          </FormControl>

          <br></br><br></br>

          <Button id="createPartyButton" variant="contained" onClick={() => handleClick(playerType)}>Rejoindre</Button>

        </form>
      </center>
    </div>
  );
}