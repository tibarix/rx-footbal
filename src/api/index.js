import axios from "axios";

export const fetchCompetitions = () => axios
    .get("https://api.football-data.org/v2/competitions?limit=10", {
        headers: {
            "X-Auth-Token": "4d61ef99b9a44603b67a0ec1e9f934ef"
        }
    })
    .then(res => res.data)
    .catch(err => err);


export const fetchTeamsByCompetitionCode = code => axios
    .get(`https://api.football-data.org/v2/competitions/${code}/teams`, {
        headers: {
            "X-Auth-Token": "4d61ef99b9a44603b67a0ec1e9f934ef"
        }
    })
    .then(res => res.data)
    .catch(err => err);