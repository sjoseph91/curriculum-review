import React, {useContext, useState} from 'react';
import { BountyContext } from './BountyContext';

const sithImageSource = "https://styles.redditmedia.com/t5_2xcl8p/styles/communityIcon_ayl8j5zqwwd51.png";

const jediImageSourc = "https://cdn0.iconfinder.com/data/icons/black-religious-icons/256/Jedi.png";


function Bounty(props){
    const {firstName, lastName, living, bountyAmount, type, _id} = props;

    const {deleteBounty} = useContext(BountyContext)

    const typeImage = type === "sith" ?
         sithImageSource :
         jediImageSourc;
    const livingStatusClassName = living? "alive" : "dead";

    return (
        <div className="bounty">
            <div className="imgContainer">
                <img src={typeImage}/>
            </div>
            <div className="name">
                {firstName} {lastName}
            </div>
            <div className="bountyAmount">
                Bounty : ${bountyAmount}
            </div>
            <div className={livingStatusClassName}>
                {living ? "Alive and well" : "Swimming with the fishes"}
            </div>
            <div className="buttons">
                <button>EDIT</button>
                <button onClick={() => deleteBounty(_id)}>DELETE</button>
            </div>

        </div>
    )
}

export default Bounty;