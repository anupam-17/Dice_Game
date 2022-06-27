
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdice1="IMGDICE/"+randomnumber1+".png";
var randomdice2="IMGDICE/"+randomnumber2+".png";

var changearrtribute1=document.querySelectorAll("img")[0];
changearrtribute1.setAttribute("src",randomdice1);
var changearrtribute2=document.querySelectorAll("img")[1];
changearrtribute2.setAttribute("src",randomdice2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player1 Won";
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="Player2 Won";
}
else if(randomnumber1==randomnumber2)
{
    document.querySelector("h1").innerHTML="Its a Tie!";
}