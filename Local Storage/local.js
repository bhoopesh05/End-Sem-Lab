localStorage.setItem("username","Bhoopesh");
let username=localStorage.getItem("username");
console.log(username);
let user={
    name: "Bhoopesh"
}
localStorage.setItem("user",JSON.stringify(user));
let data=localStorage.getItem("user");
let userObject=JSON.parse(data);
console.log(userObject.name);