import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
const BountyContext = React.createContext();

function BountyContextProvider(props){

    const [bounties, setBounties] = React.useState();

    useEffect(() => {
        getBounties();
    }, [])

    function getBounties(){
        axios.get("/bounty")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err));
    }

    function addBounty(newBounty){
        axios.post("/bounty", newBounty)
            .then(res => {
                setBounties(prevBounties => ([...prevBounties, res.data]))
            })
            .catch(err => console.log(err));
    }
    function deleteBounty(id){
        axios.delete("/bounty/" + id)
            .then(() => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== id));
            })
            .catch(err => console.log(err));
    }

    const contextData = {
        bounties, 
        addBounty, 
        deleteBounty
    }
    return (
        <BountyContext.Provider value={{...contextData}}>
            {props.children}
        </BountyContext.Provider>
    )
    
}

export {BountyContext, BountyContextProvider}