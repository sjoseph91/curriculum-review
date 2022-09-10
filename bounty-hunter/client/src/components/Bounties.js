import React, {useContext} from 'react';
import {BountyContext} from "./BountyContext"
import Bounty from "./Bounty";

function Bounties(){

    const {bounties} = useContext(BountyContext)

    return (
        <div className="bounties">
            {bounties && bounties.map(bounty => (
                <Bounty {...bounty} key={bounty._id} />
            ))}
        </div>
    )
}

export default Bounties;