var RestartButton = document.querySelector("button");
var One = document.querySelectorAll("td");

RestartButton.addEventListener("click",function(){
    for(var i=0;i<One.length;i++)
    {
        One[i].textContent= "";
    }
  });
function mark(){
    if(this.textContent === "")
    {
        this.textContent = "X";
    }
    else if(this.textContent=== "X")
    {
        this.textContent = "O";
    }
    else{
        this.textContent = "";
    }
}
for(var i=0;i<One.length;i++)
{
    One[i].addEventListener("click",mark);
}
  



