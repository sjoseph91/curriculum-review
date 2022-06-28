const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
const count = officeItems.filter(thing => thing ==="computer").length;
console.log(count);


const peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

peopleWhoWantToSeeMadMaxFuryRoad.forEach(person => {
    const {name, age, gender} = person;

    if (age > 18){
        console.log(`${name} is old enough to see the movie. Let ${gender === "male" ? "HIM" : "HER"} in.`);
    }else{
        console.log(`${name} is NOT old enough to see the movie. Don't let ${gender === "male" ? "HIM" : "HER"} in.`);
    }
})
