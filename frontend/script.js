async function register(){
    let data = {
        "name":document.getElementById("name").value,
        "email":document.getElementById("exampleInputEmail1").value,
        "password":document.getElementById("exampleInputPassword1").value,
        "phone":document.getElementById("phone").value
    }
    console.log(data);
    let res = await fetch("http://localhost:3000/register",
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
    let res = await fetch("http://localhost:3000/login",
   {
    method:"POST",
    body: JSON.stringify(data),
    headers:{"Content-Type":"application/json"}
});
let data1 = await res.json();
if(data1.status==200){
    let a = document.createElement('a');
    a.setAttribute('href','https://dazzling-wiles-853ca6.netlify.app/');
    a.innerHTML='GoToUrlShortner';
    let b = document.getElementById('goShortUrl');
    b.append(a);
}
console.log(data1);
}

async function ForgotPassword(){
    let dat = {email:document.getElementById("exampleInputEmail1").value}
    let data = await fetch("http://localhost:3000/forget",
    {
        method:"POST",
        body: JSON.stringify(dat),
        headers:{"Content-Type":"application/json"} 
    });
    let res = data.json();
    console.log(res);
}
