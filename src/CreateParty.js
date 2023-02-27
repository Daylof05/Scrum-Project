import * as React from 'react';
import randomstring from 'randomstring';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function CreateParty() {
    const navigate = useNavigate();

    const [playerType, setPlayerType] = useState("");

    const handlePlayerTypeChange = (event) => {
        setPlayerType(event.target.value);
    };


    const handleClick = (playerType) => {
        const partyName = document.getElementById("party_name").value;
        const userName = document.getElementById("pseudo_creator").value;
        localStorage.setItem("partyName", partyName);
        localStorage.setItem("userName", userName);
        const partyCode = randomstring.generate({
            length: 10
        });
        localStorage.setItem("partyCode", partyCode);

        if (partyName === "" && userName === "") {
            alert("Veuillez entrer un nom de partie et un nom d'utilisateur")
        } else if (partyName === "") {
            alert("Veuillez entrer un nom de partie");
            return;
        } else if (userName === "") {
            alert("Veuillez entrer un nom d'utilisateur");
            return;
        }

        axios.post('http://localhost:2000/createparty', {
            partyCode: partyCode,
            partyName: partyName
        }).then(function (response) {
            console.log(response);
            navigate('/app');
        })
            .catch(function (error) {
                console.log(error);
            })

        axios.post('http://localhost:2000/createplayer', {
            playerName: userName,
            playerType: playerType
        }).then(function (response) {
            console.log(response);
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
                        id="party_name"
                        label="Nom de la partie :"
                        defaultValue=""
                    />

                    <br></br><br></br>

                    <TextField
                        required
                        id="pseudo_creator"
                        label="Votre pseudo:"
                        defaultValue=""
                    />

                    <br></br><br></br>

                    <FormControl component="fieldset">
                        <RadioGroup value={playerType} onChange={handlePlayerTypeChange}>
                            <FormControlLabel value="CP" control={<Radio />} label="CP" />
                            <FormControlLabel value="TEAM" control={<Radio />} label="TEAM" />
                            <FormControlLabel value="PO" control={<Radio />} label="PO" />
                            <FormControlLabel value="SM" control={<Radio />} label="SM" />
                        </RadioGroup>
                    </FormControl>

                    <br></br><br></br>

                    <Button id="createPartyButton" variant="contained" onClick={() => handleClick(playerType)}>Créer</Button>

                </form>
            </center>
        </div>
    );
}

// import * as React from 'react';
// import randomstring from 'randomstring';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import TextField from '@mui/material/TextField';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import { useState } from 'react';

// function CreateParty() {
//     const navigate = useNavigate();

//     const [playerType, setPlayerType] = useState("");

//     const handlePlayerTypeChange = (event) => {
//         setPlayerType(event.target.value);
//     };

//     const handleClick = (playerType) => {
//         const partyName = document.getElementById("party_name").value;
//         const userName = document.getElementById("pseudo_creator").value;
//         localStorage.setItem("partyName", partyName);
//         localStorage.setItem("userName", userName);
//         const partyCode = randomstring.generate({
//             length: 10
//         });
//         localStorage.setItem("partyCode", partyCode);

//         if (partyName === "" && userName === "") {
//             alert("Veuillez entrer un nom de partie et un nom d'utilisateur")
//         } else if (partyName === "") {
//             alert("Veuillez entrer un nom de partie");
//             return;
//         } else if (userName === "") {
//             alert("Veuillez entrer un nom d'utilisateur");
//             return;
//         }

//         axios.post('http://localhost:2000/createparty', {
//             partyCode: partyCode,
//             partyName: partyName
//         }).then(function (response) {
//             console.log(response);
//             navigate('/app');
//         })
//             .catch(function (error) {
//                 console.log(error);
//             })

//         axios.post('http://localhost:2000/createplayer', {
//             playerName: userName,
//             playerType: playerType
//         })

//     }
//     return (
//         <div>
//             <center>
//                 <form action="" method="get" className="form" autoComplete='false'>
//                     <br></br>

//                     <TextField
//                         required
//                         id="party_name"
//                         label="Nom de la partie :"
//                         defaultValue=""
//                     />

//                     <br></br><br></br>

//                     <TextField
//                         required
//                         id="pseudo_creator"
//                         label="Votre pseudo:"
//                         defaultValue=""
//                     />

//                     <br></br><br></br>

//                     <FormControl component="fieldset">
//                         <RadioGroup value={playerType} onChange={handlePlayerTypeChange}>
//                             <FormControlLabel value="CP" control={<Radio />} label="CP" />
//                             <FormControlLabel value="TEAM" control={<Radio />} label="TEAM" />
//                             <FormControlLabel value="PO" control={<Radio />} label="PO" />
//                             <FormControlLabel value="SM" control={<Radio />} label="SM" />
//                         </RadioGroup>
//                     </FormControl>

//                     <br></br><br></br>

//                     <Button id="createPartyButton" variant="contained" onClick={() => handleClick(playerType)}>Créer</Button>

//                 </form>
//             </center>
//         </div>
//     );
// }

// export default CreateParty;