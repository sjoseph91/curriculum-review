import React, {useContext, useState} from 'react';
import { BountyContext } from './BountyContext';
import CustomForm from "./CustomForm";

const sithImageSource = "https://styles.redditmedia.com/t5_2xcl8p/styles/communityIcon_ayl8j5zqwwd51.png";

const jediImageSourc = "https://cdn0.iconfinder.com/data/icons/black-religious-icons/256/Jedi.png";


function Bounty(props){
    //props
    const {firstName, lastName, living, bountyAmount, type, _id} = props;

    //context
    const {deleteBounty} = useContext(BountyContext)

    //state
    const [isEditing , setIsEditing] = useState(false);

    //conditionals
    const typeImage = type === "sith" ?
         sithImageSource :
         jediImageSourc;
    const livingStatusClassName = living? "alive" : "dead";

    //edit handlers
    function toggleEdit(){
        setIsEditing(prev => !prev);
    }

    return (
        <div className="bounty">
            {
                isEditing ? 
                    <CustomForm 
                        isEdit={true}
                        {...props}
                        btnText="Save Edit"
                        toggleEdit={toggleEdit}
                        />

                    :
                <div className="bountyData">
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
                    <button
                        onClick={toggleEdit}
                    >EDIT
                    </button>
                    <button 
                        onClick={() => deleteBounty(_id)}>DELETE
                    </button>
                </div>
            </div>}
        </div>
    )
}

export default Bounty;