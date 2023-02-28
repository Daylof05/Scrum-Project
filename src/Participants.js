import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Sprints.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

export default function Participants() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.post('http://localhost:2000/users')
        .then(function (response) {
          console.log(response.data.users);
          setUsers(response.data.users);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 3000);
  }, []);

  const handleDelete = (id) => {
    axios.post('http://localhost:2000/deleteUser', {
      id: id,
    })
      .then(function () {
        window.location.reload(true)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEdit = (index) => {
    console.log("modification");
  };

  return (
    <div>

      <center>
        {users?.map((user) => (
          <Card key={user._id} className={classes.root}>
            <CardContent className='carduser'>
              <Typography
                color="textSecondary"
                gutterBottom
              >
                <br></br>
                Pseudo :{user.pseudo}
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
              >
                <br></br>
                Rôle :{user.role}
              </Typography>

              <button className='DeleteButton' onClick={() => handleDelete(user._id)}>Supprimer</button>
              <button className='EditButton' onClick={() => handleEdit(user._id)}>Modifier</button>

            </CardContent>
          </Card>
        ))}
        <br></br>

        <br></br><br></br>
        <a href="/app">
          <button className='backbtn' variant="contained">Retour</button>
        </a>
        <br></br><br></br>
      </center>
    </div>
  );
}