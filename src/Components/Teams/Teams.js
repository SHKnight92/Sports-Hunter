import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const{strTeam, strTeamBadge, idTeam, strSport} = props.team;
    return (
            <div className = 'team-card'>
                <div>
                    <img src={strTeamBadge} alt={strTeam}/>
                    <br/>
                    <h3>{strTeam}</h3>
                    <p>Sports type : {strSport}</p>
                    <Link to={`/teamDetail/${idTeam}`}>
                            <button>Explore <FontAwesomeIcon icon={faArrowCircleRight}/></button>
                    </Link>
                </div>
            </div>
    );
};

export default Teams;