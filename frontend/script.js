async function register(){
    let data = {
        "name":document.getElementById("name").value,
        "email":document.getElementById("exampleInputEmail1").value,
        "password":document.getElementById("exampleInputPassword1").value,
        "phone":document.getElementById("phone").value
    }
    console.log(data);
    let res = await fetch("https://node-forget-jwt-app.herokuapp.com/register",
   {
    method:"POST",
    body: JSON.stringify(data),
    headers:{"Content-Type":"application/json"}
});
console.log(res.status);
}


async function login(){
    let data = {
       
        "email":document.getElementById("exampleInputEmail1").value,
        "password":document.getElementById("exampleInputPassword1").value
        
    }
   // console.log(data);
    let res = await fetch("https://node-forget-jwt-app.herokuapp.com/login",
   {
    method:"POST",
    body: JSON.stringify(data),
    headers:{"Content-Type":"application/json"}
});
let data1 = await res.json();

console.log(data1);
}

async function ForgotPassword(){
    let dat = {email:document.getElementById("exampleInputEmail1").value}
    let data = await fetch("https://node-forget-jwt-app.herokuapp.com/users/forget",
    {
        method:"POST",
        body: JSON.stringify(dat),
        headers:{"Content-Type":"application/json"} 
    });
    let res = data.json();
    console.log(res);
}
