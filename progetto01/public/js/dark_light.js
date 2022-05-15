function dark_lightFN(){
    var body = document.querySelector('body');
    if(body.classList.contains('dark-mode')){
      body.classList.remove('dark-mode');
      var icon = document.querySelector('#DLIcon');
      icon.innerHTML = "brightness_5";
    }else{
      body.classList.add('dark-mode');
      var icon = document.querySelector('#DLIcon');
      icon.innerHTML = "brightness_7";
    }

  }