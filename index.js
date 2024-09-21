function getPassword(){
  let userName=document.getElementById("username").value;
  let myPassword= "aliahmed";
  let password=document.getElementById("password").value;
  
  if(password===myPassword){
    document.querySelector(".info-box").style.display="block";
    document.querySelector(".info-box").classList.add("green-text");
    document.querySelector(".info-box").innerHTML="Hey " + userName;

  }
  else if(password===""){
    document.querySelector(".info-box").classList.remove("green-text");
    document.querySelector(".info-box").style.display="block";
    document.querySelector(".info-box").classList.add("red-text");
    document.querySelector(".info-box").innerHTML="Please enter your password";
    }
  else{
    document.querySelector(".info-box").classList.remove("green-text");
    document.querySelector(".info-box").style.display="block";
    document.querySelector(".info-box").classList.add("red-text");
    document.querySelector(".info-box").innerHTML="Incorrect password";
  }
 

}
