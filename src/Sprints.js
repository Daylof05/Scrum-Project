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

export default function Sprints() {
  const classes = useStyles();
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.post('http://localhost:2000/sprints')
        .then(function (response) {
          console.log(response.data.sprints);
          setSprints(response.data.sprints);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 3000);
  }, []);


  const handleDelete = (id) => {
    axios.post('http://localhost:2000/deleteSprint', {
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
      {sprints?.map((sprint) => (
        <Card key={sprint._id} className={classes.root}>
          <CardContent className='cardsprint'>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              <br></br>
              Numéro du sprint :{sprint.numero}
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              <br></br>
              Date du sprint :{sprint.date}
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              <br></br>
              Durée du sprint :{sprint.duree}
            </Typography>

            <button className='DeleteButton' onClick={() => handleDelete(sprint._id)}>Supprimer</button>
            <button className='EditButton' onClick={() => handleEdit(sprint._id)}>Modifier</button>

          </CardContent>
        </Card>
      ))}

      <a href="/app">
        <button className='backbtn' variant="contained">Retour</button>
      </a>
    </div>
  );

}