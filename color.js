var colors=genrand(6);
var num=6;
var body=document.querySelector("body");
var sq=document.querySelectorAll(".square");
var pick=pickrand();
var init="black";
var mesdis=document.querySelector("#mesdis");
var h1=document.querySelector("h1");
var top=document.querySelector("topnav");
var coldis=document.getElementById("coldis");
var but=document.querySelector("#butto");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
coldis.textContent=pick;
easy.addEventListener("click", function() {
    h1.style.backgroundColor="black";
    easy.classList.add("select");
	hard.classList.remove("select");
	num = 3;
	colors = genrand(num);
	pick=pickrand();
	coldis.textContent=pick;
	for(var i = 0; i < sq.length; i++) {
		if(colors[i]) {
			sq[i].style.backgroundColor = colors[i];
		} else {
			sq[i].style.display = "none";
		}
    }
    h1.style.backgroundColor="black";
    body.style.backgroundColor="black";  
});
hard.addEventListener("click", function() {
    h1.style.backgroundColor="black";
	hard.classList.add("select");
	easy.classList.remove("select");
	num= 6;
	colors=genrand(num);
	pick=pickrand();
	coldis.textContent=pick;
	for(var i = 0; i < sq.length; i++) {
		sq[i].style.backgroundColor = colors[i];
		sq[i].style.display = "block";
    }
    h1.style.backgroundColor="black"; 
    body.style.backgroundColor="black";  
});
but.addEventListener("click", function() {
    h1.style.backgroundColor="black";
    but.textContent="NEW COLORS";
    mesdis.textContent="";
	colors = genrand(6);
	pick = pickrand();
	coldis.textContent=pick;
	for(var i = 0; i < sq.length; i++) {
		sq[i].style.backgroundColor = colors[i];
	}
    h1.style.background.color = "black";
    body.style.backgroundColor="black";  
});

function changeColors(color) {
	for(var i = 0; i < sq.length; i++) {
		sq[i].style.background = color;
	}
}
for(var i=0;i<sq.length;i++)
{
    h1.style.backgroundColor="black";
    sq[i].style.backgroundColor=colors[i];
   sq[i].addEventListener("click",function(){
    var clicol=this.style.backgroundColor;
    console.log(clicol);
    if(clicol==pick)
    {
        for(var j=0;j<sq.length;j++)
        {
            sq[j].style.backgroundColor=pick;
        }
        mesdis.textContent="CORRECT";
        but.textContent="PLAY AGAIN";
        h1.style.backgroundColor=pick;
        body.style.backgroundColor=pick;
    }
    else{
        this.style.backgroundColor="black";
        mesdis.textContent="TRY AGAIN";
    }
   });
}
function pickrand()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function genrand(num)
{
    var arr=[];
    for(i=0;i<num;i++)
    {
        arr.push(rand());
    }
    return arr;
}
function rand()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}