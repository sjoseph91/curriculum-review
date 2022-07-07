function sum(x, y){
  //check data types first and throw error
  try{
    if (typeof x !== "number" || typeof y !== "number"){
        throw new Error("Inputs must be numbers");
    }
    return x + y;
  }
  catch(err){
    console.log(err);
  }
  
}

console.log(sum("1", "2"));
// console.log(sum(1,2));

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  if (username !== user.username || password !== user.password){
    throw new Error("Invalid credentials :(");
  }else{
    console.log("Login successful!");
  }
}

try{
    login("sasm", "123abc")
}catch(err){
    console.log(err.message);
}
