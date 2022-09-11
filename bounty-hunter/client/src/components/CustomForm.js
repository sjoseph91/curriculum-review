import React, {useState, useContext} from "react";  
import { BountyContext } from "./BountyContext";






function CustomForm(props){
    const {
        btnText, 
        isEdit, 
        toggleEdit, 
        firstName,
        lastName,
        living,
        bountyAmount,
        type, 
        _id: id
    } = props;
    const {addBounty, editBounty} = useContext(BountyContext);
    
    function submit(e){
        e.preventDefault();
        if (isEdit){
            editBounty(id, formData);
            toggleEdit()
        }else{
            addBounty(formData);
        }
    }

    const initialFormData = {
    firstName: firstName || "",
    lastName: lastName || "",
    living: living || false,
    bountyAmount: bountyAmount || 0,
    type: type || "jedi"
    }

const [formData, setFormData] = useState(initialFormData);

function handleChange(event){
    const {name, value, type} = event.target;

    if( type=== "radio" ){
        if (name === "living"){
            setFormData(prevData => {
                return {...prevData, living: !prevData.living}
            })
        }
        else if ( name === "type"){
            setFormData(prevData => {
                return {
                    ...prevData,
                    type: prevData.type === "sith" ? "jedi" : "sith"
                }
            })
        }
        
    }else{
     
        setFormData(prevData => ({...prevData, [name]: value}))
        
    }
}

    return (
        <form 
            onSubmit={submit}
            className={isEdit? "editForm" : ""}
            >
            <input 
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
            />
            <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
            />
            <div className="radio">
                <label htmlFor="alive"> Alive 
                    <input 
                        type="radio"
                        id="alive"
                        value="true"
                        checked={formData.living}
                        name="living"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="dead"> Dead
                    <input 
                        type="radio"
                        id="dead"
                        value="false"
                        name="living"
                        checked={!formData.living}
                        onChange={handleChange}
                    />
                </label>

            </div>
           
            <input 
                type="number"
                name="bountyAmount"
                value={formData.bountyAmount}
                placeholder="Bounty Amount  $"
                onChange={handleChange}
            />
            <div className="radio">
                <label htmlFor="sith">Sith
                    <input 
                        type="radio"
                        id="sith"
                        value="sith"
                        name="type"
                        checked={formData.type === "sith"}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="jedi"> Jedi
                    <input 
                        type="radio"
                        id="jedi"
                        value="jedi"
                        name="type"
                        checked={formData.type === "jedi"}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button>{btnText}</button>
            {isEdit ? 
            <button className="cancelEditButton" onClick={toggleEdit}>Cancel Edit</button>
            : 
            ""
            }
            


            

        </form>
    )
}

export default CustomForm;