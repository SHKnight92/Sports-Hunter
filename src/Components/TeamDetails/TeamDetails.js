import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faVenusMars, faBaseballBall, faFlagUsa, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import male from '../../images/male.png';
import female from '../../images/female.png';

const TeamDetails = () => {
    const{teamsId}= useParams();
    const [teamDetails, setTeamDetails] = useState({});
    useEffect(() => {
            const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamsId}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    },[teamsId])

  const {strTeamBanner, strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionES, strFacebook, strTwitter, strYoutube } = teamDetails;

  const maleImg =`${male}`;
  const femaleImg =`${female}`;
  
    return (    
   <div>
         <div className='team-header'  style={{backgroundImage: `url("${strTeamBanner}")`}}>
            <img src={strTeamBadge}/>
         </div>
          <div className ='teamDetails'>
                  <div className ='teamInfo'>
                        <h2>{strTeam}</h2>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/>  Founded : {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlagUsa}/>  Country : {strCountry}</p>
                        <p><FontAwesomeIcon icon={faBaseballBall}/>  Sports Type : {strSport}</p>
                        <p><FontAwesomeIcon icon={faVenusMars}/>  Gender : {strGender}</p>
                  </div>
                  <div className ='teamImage'>
                        {
                              strGender === 'Male' ? <img src ={maleImg}/> : <img src ={femaleImg}/>
                        }
                  </div>
             </div>
      <div className='team-description'>
                  <p>{strDescriptionES}</p>
      </div>
      <div className='team-footer'>
            <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className='social-icon facebook' icon={faFacebook}/></a>
            <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className='social-icon twitter' icon={faTwitter}/></a>
            <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer"><FontAwesomeIcon className='social-icon youtube' icon={faYoutube}/></a>
      </div>
   </div>
    );
};

export default TeamDetails;