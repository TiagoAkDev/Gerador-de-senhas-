let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");


let containerpassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
let novasenha = "";

sizepassword.innerHTML = sliderElement.value;
    slider.oninput = function(){
    sizepassword.innerHTML = this.value;
}

function generatepassword(){

    let pass = ""
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n))
        
    }
    containerpassword.classList.remove("hide");
  password.innerHTML = pass;
  novasenha = pass;
}

function copypassword(){
    alert("Senha copiada com sucesso !")
    navigator.clipboard.writeText(novasenha);
}

