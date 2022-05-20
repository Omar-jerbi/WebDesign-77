function dark_lightFN(){
    var body = document.querySelector('body');
    if(body.classList.contains('dark-mode')){
      body.classList.remove('dark-mode');
      body.style.backgroundColor = "#c4c3c4";//style>class
      var icon = document.querySelector('#DLIcon');
      icon.innerHTML = "brightness_5";
    }else{
      body.classList.add('dark-mode');
      body.style.backgroundColor = "#0e1724";//style>class
      var icon = document.querySelector('#DLIcon');
      icon.innerHTML = "brightness_7";
    }

  }