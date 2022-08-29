import React, {useState, useContext} from 'react';
import { Context } from './Context';
export default function Form({prevData, setEditing, editUglyThing}){

    const {addUglyThing,  } = useContext(Context)
    


    const initialFormData =  prevData ? {
        title: prevData.title,
        imgUrl: prevData.imgUrl,
        description: prevData.description,
        } :

    {title: "", 
    imgUrl: "", 
    description: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    function handleChange(event){
        const {name, value} = event.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault();
        if (prevData){
            editUglyThing( prevData.id, formData)
            setEditing(prev => !prev);
        }else{
            addUglyThing(formData);
            setFormData(initialFormData);
        }
        
        
        
    }

    return (
        <form name="uglyForm" id="uglyForm" onSubmit={handleSubmit}>
            <div className="inputContainer">
                <input 
                type="text"
                placeholder='Title'
                name="title"
                value={formData.title}
                onChange={handleChange}
                />
                <input 
                    type="url"
                    placeholder='Img URL'
                    name="imgUrl"
                    value={formData.imgUrl}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder='Description'
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">{prevData ? "Save Edit" : "Submit"}</button>
        </form>
            )
}