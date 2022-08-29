import axios from 'axios';
import React, {useState, useEffect} from 'react';
const baseUrl = "https://api.vschool.io/seanj/thing"

const Context = React.createContext();

function ContextProvider(props){
    
    const [uglyThings, setUglyThings] = useState([])


    useEffect(getAllUglyThings, [])
    function getAllUglyThings(){
        fetch(baseUrl)
            .then(res => res.json())
            .then(res => setUglyThings(res))
            .catch(err => console.log(err))
    
    }
    function addUglyThing(newUglyThing){
        axios.post(baseUrl, newUglyThing)
            .then(res => {
                setUglyThings(prev => [...prev, res.data])
            })
    }
    function deleteUglyThing(id){
        axios.delete(baseUrl + "/" + id)
        .then(() => {
            setUglyThings(prev => prev.filter(thing => thing._id !== id))
        })
        .catch(err => console.log(err))
    }

    function editUglyThing(id, thing){
        axios.put(`${baseUrl}/${id}`, thing)
            .then(res => {
                setUglyThings(prevThings => prevThings.map(prevThing => {
                    if (prevThing._id == id){
                        return thing;
                    }else{
                        return prevThing;
                    }
                }))
            })
            .catch(err => console.log(err))
    }
    const contextValue = {
        uglyThings,
        addUglyThing, 
        deleteUglyThing,
        editUglyThing
    }
    return (
        <Context.Provider value={contextValue} >
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}