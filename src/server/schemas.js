const mongoose = require('mongoose');

const partieSchema = new mongoose.Schema({
    code: { type: String, required: true },
    nom: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
    pseudo: { type: String, required: true },
    role: { type: String, enum: ['CP', 'PO', 'TEAM', 'SM'], required: true }
});

const sprintSchema = new mongoose.Schema({
    numero: { type: Number, required: true },
    date: { type: Date, required: true },
    duree: { type: Number, required: true }
})

const storieSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    nombrePE: { type: Number, required: true }
})

const dailySchema = new mongoose.Schema({
    question: { type: String, required: true },
    reponse: { type: String, required: true }
})

const tchatSchema = new mongoose.Schema({
    user: { type: String, required: true },
    message: { type: String}
})

const Partie = mongoose.model('Partie', partieSchema);
const User = mongoose.model('User', userSchema);
const Sprint = mongoose.model('Sprint', sprintSchema);
const Storie = mongoose.model('Storie', storieSchema);
const Daily = mongoose.model('Daily', dailySchema);
const Tchat = mongoose.model('Tchat', tchatSchema);

module.exports = {
    Partie,
    User,
    Sprint,
    Storie,
    Daily,
    Tchat
};