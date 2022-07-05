const form = document.travelForm;
const {firstName, lastName, age, gender, destination} = form;
let dietaryRestrictions = [];

console.log(firstName, lastName, age, gender, destination )

form.addEventListener("submit", ( e ) => {
    e.preventDefault();

    const checkedItems = document.querySelectorAll("input[name='dietary']:checked")
    checkedItems.forEach(item => dietaryRestrictions.push(item.value))

    alert(`
    First Name: ${firstName.value}
    Last Name: ${lastName.value}
    Age: ${age.value}
    Gender: ${gender.value}
    Destination: ${destination.value}
    Dietary Restrictions: ${dietaryRestrictions}`)

    //reset
    dietaryRestrictions = [];
}
)