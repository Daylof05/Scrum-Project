import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Stories.css';
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

export default function Stories() {
  const classes = useStyles();
  const [stories, setStories] = React.useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.post('http://localhost:2000/stories')
        .then(function (response) {
          console.log(response.data.stories);
          setStories(response.data.stories);
        })
        .catch(function (error) {
          console.log(error);
        });

    }, 3000);
  }, []);

  // useEffect(() => {
  //   const data = localStorage.getItem('stories');
  //   if (data) {
  //     setStories(JSON.parse(data));
  //   }
  // }, []);

  const handleDelete = (id) => {
    axios.post('http://localhost:2000/deleteStorie', {
      id: id,
    })
      .then(function () {
        window.location.reload(true)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const [selectedStorieIndex, setSelectedStorieIndex] = useState(null);
  const handleEdit = (index) => {
    // setSelectedStorieIndex(index);
    console.log("modification");
  };

  // const handleUpdate = (property, value) => {
  //   const newStories = [...stories];
  //   newStories[selectedStorieIndex][property] = value;
  //   setStories(newStories);
  // };

  // const handleSave = () => {
  //   localStorage.setItem('stories', JSON.stringify(stories));
  //   setSelectedStorieIndex(null);
  // };

  // const handleCancel = () => {
  //   setSelectedStorieIndex(null);
  // };

  return (
    <div>
      {stories?.map((storie) => (
        <Card key={storie._id} className={classes.root}>
          <CardContent class='cardstorie'>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <br></br>
              Nom de la storie : {storie.nom}
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              <br></br>
              Durée :{storie.nombrePE}
            </Typography>

              <button class='DeleteButton' onClick={() => handleDelete(storie._id)}>Supprimer</button>
              <button class='EditButton' onClick={() => handleEdit(storie._id)}>Modifier</button>
          </CardContent>
        </Card>
      ))}

      <a href='/app'>
        <button class='backbtn'>Retour</button>
      </a>
    </div>
  );

}