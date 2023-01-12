function blinker()
{
  if(document.getElementById("blink"))
  {
      var d = document.getElementById("blink") ;
      d.style.color= (d.style.color=='black'?'#E487B1':'black');
      setTimeout('blinker()', 950);
  }
}