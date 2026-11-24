sessionStorage.setItem("username","Bhoopesh");
let username=sessionStorage.getItem("username");
console.log(username);
let user={
    name: "Bhoopesh",
    age: 19
}
sessionStorage.setItem("user",JSON.stringify(user));
let data=sessionStorage.getItem("user");
let userObject=JSON.parse(data);
console.log(userObject.name);
console.log(userObject.age);
