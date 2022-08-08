import React, {useState} from "react";


//write function to submit formData - function must use passed down function from above to render badges

const Form = ({add}) => {

    const initialFormState = {
    fName: "",
    lName: "",
    email: "",
    birthPlace: "",
    phone: "", 
    favFood: "",
    bio: ""
}

const [formData, setFormData] = useState(initialFormState)

function handleChange(event){
    const {name, value} = event.target;
    setFormData(prevData => (
        {
            ...prevData,
            [name]: value
        }
    ))
}

function handleSubmit(e){
    e.preventDefault();
    add(formData)
    setFormData(initialFormState);
    
}
    return ( 
        <div className="formContainer">
            <form 
                name="form" 
                id="form"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    placeholder="First Name"
                    name="fName"
                    value={formData.fName}
                    onChange={handleChange}
                    >
                </input>

                <input 
                    type="text"
                    placeholder="Last Name"
                    name="lName"
                    value={formData.lName}
                    onChange={handleChange}
                    >
                </input>

                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    >
                </input>

                <input 
                    type="text"
                    placeholder="Place of Birth"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleChange}
                    >
                </input>

                <input 
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    >
                </input>

                <input 
                    type="text"
                    placeholder="Favorite Food"
                    name="favFood"
                    value={formData.favFood}
                    onChange={handleChange}
                    >
                </input>

                <textarea
                    placeholder="Tell us about yourself"
                    name="bio"
                    rows="5"
                    value={formData.bio}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>

            </form>
        </div> 
    );
}
 
export default Form;