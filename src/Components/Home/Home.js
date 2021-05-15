import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';
import './Home.css';


const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
        .then(res =>res.json())
        .then(data => setTeams(data.teams))
    }, [])

    return (
        <div className='container'>
            <Header></Header>
            {
                teams.map(team => <Teams  team ={team} key={team.strTeam}></Teams>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;