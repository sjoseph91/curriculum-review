import React, {useContext} from 'react';
import {Context} from "./Context";
import UglyThing from './UglyThing';


export default function UglyThings(){
    
    let {uglyThings} = useContext(Context);

    return (
        <main className='uglyThingContainer'>
            {uglyThings.map(thing => <UglyThing key={thing._id}{...thing}/>)}
        </main>
    )
}