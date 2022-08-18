import React from "react";

export default function Selector({data, setGradientValues}){

    function handleChange(event){
        const {name, value} = event.target;
        setGradientValues(prevValues => {
            return {...prevValues, [name]: value}
        })
    }

    return (
        <div className="selector">
            <h2>Options</h2>
            <form id="colorForm" name="colorPicker">
                <div className="inputContainer">
                    <label htmlFor="color1">Color 1</label>
                    <div className="colorText">{data.color1}</div>
                    <input 
                        name="color1" 
                        type="color" 
                        value={data.color1}
                        onChange={handleChange}
                        />
                </div>
                <div className="inputContainer">
                    <label htmlFor="color2">Color 2</label>
                    <div className="colorText">{data.color2}</div>
                    <input 
                        name="color2" 
                        type="color" 
                        value={data.color2}
                        onChange={handleChange}
                        />
                </div>
                <label htmlFor="angle">Angle
                    <input 
                        type="number"
                        name="angle"
                        value={data.angle}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    )
}