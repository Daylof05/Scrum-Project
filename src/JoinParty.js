import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function JoinParty() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data.code);
    axios.post('http://localhost:2000/joinparty', {
      code: data.code,
    }).then(function () {
      navigate('/app');
    })
      .catch(function () {
        console.log("Erreur la party n'existe pas");
      });
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <FormControlLabel control={<Checkbox />} label="CP" />
          <br></br>
          <FormControlLabel control={<Checkbox />} label="TEAM" />
          <br></br>
          <FormControlLabel control={<Checkbox />} label="PO" />
          <br></br>
          <FormControlLabel control={<Checkbox />} label="SM" />

          <br></br><br></br>

          <Button variant="contained" type="submit">Rejoindre</Button>

        </form>
      </center>
    </div>
  );
}