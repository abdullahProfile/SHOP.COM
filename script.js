window.addEventListener("scroll", function ()
{
  const btn=this.document.getElementById("backTop");

  if(this.window.scrollY > 500) {
    btn.style.display="flex";
  }else {
    btn.style.display="none"
  }
}
);

function scrollTop(){
  window.scrollTo (
    {
      top:0,
      behavior:"smooth"
    }
  )
}

document.addEventListener("DOMContentLoaded", function()
{
  const btn=document.getElementById("backTop");
  btn.addEventListener("click", scrollTop);
}
)