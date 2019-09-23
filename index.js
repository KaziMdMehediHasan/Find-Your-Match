
var randomNumber = Math.floor(Math.random() * 10) + 1;

var celeb = "find" + randomNumber + ".png";

document.querySelector("img").setAttribute("src" , celeb);

///

if(celeb = "find1"){
  document.querySelector("h1").innerHTML = "Volia ! We found your Betterhalf !";
}
