import React from "react";

//badge will get this data as on object and display it.
export default function Badge({data}){
    return (
        <div className="badge">
            <p>Name:  {data.fName} {data.lName}</p>
            <p>Email: {data.email}</p>
            <p>Place of Birth: {data.birthPlace}</p>
            <p>Phone: {data.phone}</p>
            <p>Favorite Food: {data.favFood}</p>
            <textarea readOnly value={data.bio}/>
        </div>
    )
}