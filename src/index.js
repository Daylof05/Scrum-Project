import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Accueil'
import CreateParty from './CreateParty'
import JoinParty from './JoinParty'
import App from './App';
import Stories from './Stories'
import DailyQuestionnaire from './DailyQuestionnaire'
import Questionnaire from './Questionnaire'
import Daily from './Daily'
import NewDaily from './NewDaily';
import Participants from './Participants';
import ResultatQuestionnaire from './ResultatQuestionnaire'
import reportWebVitals from './reportWebVitals';
import Creersprint from './Creersprint'
import Sprints from './Sprints'
import Creerstorie from './Creerstorie'
import Creerdaily from './Creerdaily'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element = {<Accueil/>}/>
        <Route path="/createparty" element = {<CreateParty/>}/>
        <Route path="/joinparty" element = {<JoinParty/>}/>
        <Route path="/app" element = {<App/>}/>
        <Route path="/stories" element = {<Stories/>}/>
        <Route path="/dailyquestionnaire" element = {<DailyQuestionnaire/>}/>
        <Route path="/questionnaire" element = {<Questionnaire/>}/>
        <Route path="/resultatquestionnaire" element = {<ResultatQuestionnaire/>}/>
        <Route path="/creerdaily" element = {<Creerdaily/>}/>
        <Route path="/daily" element = {<Daily/>}/>
        <Route path="/newdaily" element = {<NewDaily/>}/>
        <Route path="/participants" element = {<Participants/>}/>
        <Route path="/creersprint" element = {<Creersprint/>}/>
        <Route path="/sprints" element = {<Sprints/>}/>
        <Route path="/creerstorie" element = {<Creerstorie/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);