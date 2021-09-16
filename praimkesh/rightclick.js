document.onmousedown=disableclick;
status="I'm sorry :C";
function disableclick(event)
{
  if(event.button==2)
   {
     alert(status);
     return false;
   }
}