var collapsibleheaders = document.querySelectorAll('.collapsible-header');
collapsibleheaders.forEach(element => {
  element.addEventListener('click', ()=>{
    if(element.querySelector('img').style.transform == "rotate(45deg)")
      element.querySelector('img').style.transform = "rotate(0)";
    else
      element.querySelector('img').style.transform = "rotate(45deg)";

  })
});
