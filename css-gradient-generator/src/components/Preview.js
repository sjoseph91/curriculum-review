import React from "react";

export default function Preview({data}){

   const customStyle={
        background: `linear-gradient(${data.angle}deg, ${data.color1}, ${data.color2})`
    }

    return (
        <div className="preview">
            <div className="sample" style={customStyle}>
            </div>
             <textarea 
                readOnly
                value={`background: ${customStyle.background}; 
-moz-background: ${customStyle.background}; 
-webkit: ${customStyle.background};
                `}
            />
        </div>
    )
}