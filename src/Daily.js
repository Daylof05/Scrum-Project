import './Daily.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import './Sprints.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useForm } from "react-hook-form";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '20px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});



export default function Daily() {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const [pseudo, setPseudo] = useState(localStorage.getItem('userName'));
  const [tchat, setTchat] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      axios.post('http://localhost:2000/getMessage')
        .then(function (response) {
          console.log(response.data.message);
          setTchat(response.data.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 3000);
  }, []);


  const onSubmit = data => {
    console.log(data.message);
    console.log(pseudo);

    axios.post('http://localhost:2000/createmessage', {
      pseudo: pseudo,
      message: data.message
    }).then(function (response) {
      window.location.reload(true);
    })
      .catch(function (error) {
        console.log(error);
      })

  };

  const cloturer = () => {
    axios.post('http://localhost:2000/deleteTchat', {

    }).then(function (response) {
      window.location.reload(true);
    })
      .catch(function (error) {
        console.log(error);
      })
  }


  return (
    <div>
      <center>
        <Header />

        {tchat?.map((tchat) => (
          <Card key={tchat._id} className={classes.root}>
            <CardContent className='cardMessage'>
              <Typography
                color="textSecondary"
                gutterBottom
              >
                <br></br>
                Envoyé par :{tchat.user}
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
              >
                <br></br>
                Message: {tchat.message}
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
              >
              </Typography>
            </CardContent>
          </Card>
        ))}
        <form onSubmit={handleSubmit(onSubmit)}>
          < br ></br>
          <TextField
            id="textInput"
            label="Ecrivez ici"
            {...register("message", { required: true })}
          />
          <br></br><br></br>

          <Button id="submit" variant="contained" type="submit">Envoyer</Button>

          <br></br><br></br>
        </form>
        <Button variant="contained" onClick={cloturer}>Clotûrer le Daily</Button>
        <br></br><br></br>
        <a href="/app">
          <Button variant="contained">retour</Button>
        </a>
        <br></br><br></br>
      </center>
    </div >
  );
}
