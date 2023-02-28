const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Partie, User, Sprint, Storie, Daily, Tchat } = require('./schemas');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


//Connection base de données

main().catch(err => console.log(err));

async function main() {
    // await mongoose.set("strictQuerry", false)
    //await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

(async () => {
    try {
        mongoose.set("strictQuery", false)
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/scrumy")
        console.log("Connecté à Scrumy", db.connection.name)
    }
    catch (err) {
        console.error(err)
    }
})()

app.post('/createparty', async (req, res) => {
    console.log(req.body);
    const partie = new Partie({ code: req.body.partyCode, nom: req.body.partyName })
    await partie.save()
        .then(() => {
            console.log('Partie ajouté à la base de données !');
        })
        .catch(() => {
            console.log('Erreur lors de l\'ajout de la partie à la base de données');
            res.sendStatus(403);
        });

    const user = new User({ pseudo: req.body.playerName, role: req.body.playerType });
    await user.save()
        .then(() => {
            console.log('Utilisateur ajouté à la base de données !');
            res.sendStatus(201);
        })
        .catch(() => {
            console.log('Erreur lors de l\'ajout de l\'utilisateur à la base de données');
            res.sendStatus(403);
        })
})

app.post('/joinparty', async (req, res) => {
    console.log(req.body);
    const verifyCode = await Partie.find({ code: req.body.partyCode });
    console.log(typeof verifyCode);
    if (verifyCode.length > 0) {
        const user = new User({ pseudo: req.body.playerName, role: req.body.playerType });
        const partyName = verifyCode[0].nom;
        console.log(user);
        await user.save()
            .then(() => {
                console.log('Utilisateur ajouté à la base de données !');
                res.status(201).json({
                    partyName: partyName
                });
            })
            .catch(() => {
                console.log('Erreur lors de l\'ajout de l\'utilisateur à la base de données');
                res.sendStatus(403);
            })
    }
    else {
        res.sendStatus(403);
    }
})

app.post('/createplayer', async (req, res) => {
    console.log(req.body);
    const user = new User({ pseudo: req.body.playerName, role: req.body.playerType });
    await user.save()
        .then(() => {
            console.log('Utilisateur ajouté à la base de données !');
            res.sendStatus(201);
        })
        .catch(() => {
            console.log('Erreur lors de l\'ajout de l\'utilisateur à la base de données');
            res.sendStatus(403);
        })
})

app.post('/createmessage', async (req, res) => {
    console.log(req.body);
    const message = new Tchat({ user: req.body.pseudo, message: req.body.message });
    await message.save()
        .then(() => {
            console.log('Message créé');
            res.sendStatus(201);
        })
        .catch(() => {
            console.log('Erreur lors de l\'ajout du message');
            res.sendStatus(403);
        })
})


app.post('/sprints', async (req, res) => {
    try {
        const sprints = await Sprint.find();
        console.log(sprints)
        res.status(201).json({
            sprints: sprints,
        })
    }
    catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
});

app.post('/stories', async (req, res) => {
    try {
        const stories = await Storie.find();
        console.log(stories)
        res.status(201).json({
            stories: stories,
        })
    }
    catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
});

app.post('/partie', async (req, res) => {
    try {
        const partie = await Partie.find();
        console.log(partie)
        res.status(201).json({
            partie: partie,
        })
    }
    catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
});

app.post('/user', async (req, res) => {
    try {
        const user = await User.find();
        console.log(user)
        res.status(201).json({
            user: user,
        })
    }
    catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
});

app.post('/getMessage', async (req, res) => {
    try {
        const message = await Tchat.find();
        console.log(message)
        res.status(201).json({
            message: message
        })
    }
    catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
})

app.post('/users', async (req, res) => {
    try {
        const users = await User.find();
        console.log(users)
        res.status(201).json({
            users: users,
        })
    }
    catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
});


app.post('/createsprint', async (req, res) => {
    console.log(req.body);
    const sprint = new Sprint({ numero: req.body.numSprint, date: req.body.dateSprint, duree: req.body.dureeSprint });
    await sprint.save()
        .then(() => {
            console.log('Sprint ajouté à la base de donnée');
            res.sendStatus(201);
        })
        .catch(() => {
            console.log('Erreur lors de l\'ajout du sprint à la base de données');
            res.sendStatus(403);
        })
})

app.post('/createstorie', async (req, res) => {
    console.log(req.body);
    const storie = new Storie({ nom: req.body.nomStorie, nombrePE: req.body.nbPEStorie });
    await storie.save()
        .then(() => {
            console.log('Storie ajouté à la base de données !');
            res.sendStatus(201);
        })
        .catch(() => {
            console.log('Erreur lors de l\'ajout de la storie à la base de données');
            res.sendStatus(403);
        })
})

app.post('/deleteSprint', async (req, res) => {

    await Sprint.deleteOne({ _id: req.body.id });

    const verifyData = await Sprint.countDocuments({ _id: req.body.id });
    if (verifyData.length > 0) {
        res.sendStatus(403);
    }
    else {
        res.sendStatus(201);
    }
})

app.post('/deleteStorie', async (req, res) => {
    await Storie.deleteOne({ _id: req.body.id });

    const verifyData = await Storie.countDocuments({ _id: req.body.id });
    if (verifyData.length > 0) {
        res.sendStatus(403);
    }
    else {
        res.sendStatus(201);
    }
})

app.post('/deleteUser', async (req, res) => {

    await User.deleteOne({ _id: req.body.id });

    const verifyData = await User.countDocuments({ _id: req.body.id });
    if (verifyData.length > 0) {
        res.sendStatus(403);
    }
    else {
        res.sendStatus(201);
    }
})

app.post('/deleteTchat', async (req, res) => {
    await Tchat.deleteMany();
    const verifyData = await Tchat.countDocuments();
    if (verifyData.length > 0) {
        res.sendStatus(403);
    }
    else{
        res.sendStatus(201);
    }
})


const daily = new Daily({ question: 'De quelle couleur est le cheval blanc d\'Henry IV?', reponse: 'Blouge' });
daily.save()
    .then(() => console.log('Daily ajouté à la base de données !'))
    .catch(() => console.log('Erreur lors de l\'ajout du daily à la base de données'));


app.listen(2000, () => {
    console.log('app listening on port 2000')
});