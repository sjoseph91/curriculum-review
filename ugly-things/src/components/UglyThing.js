import React, {useContext, useState} from 'react'
import { Context } from './Context'
import Form from "./Form"

export default function UglyThing({imgUrl, title, description, _id: id}){

    const {deleteUglyThing, editUglyThing} = useContext(Context)

    const [editing, setEditing] = useState(false);

    function handleEdit(){
        setEditing(prev => !prev);
    }

    return (
        editing ? 
        <div className="uglyThing" id={id}>
            <Form 
                prevData={{title, description, imgUrl, id} }
                setEditing={setEditing}
                editUglyThing={editUglyThing}
            /> 
        </div>
            : 
    
        <div className="uglyThing" id={id}>
            <div className="imgContainer">
                <img src={imgUrl} alt="ugly thing"/>
            </div>
            <h4 className="title">{title}</h4>
            <p className="description">{description}</p>
            <div className="buttons">
                <button 
                    className="delete"
                    onClick={() => deleteUglyThing(id)}
                >Delete
                </button>
                <button 
                    className="edit"
                    onClick={handleEdit}
                    disabled={editing ? true : false}
                >{editing ? "Editing..." : "Edit"}</button>
            </div>
        </div>
        
    )
}