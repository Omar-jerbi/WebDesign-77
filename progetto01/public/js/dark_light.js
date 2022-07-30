function dark_lightFN(){
    var body = document.querySelector('body');
    if(body.classList.contains('dark-mode')){
        body.style.transition = "background-color 1s ease";

      body.classList.remove('dark-mode');
      body.style.backgroundColor = "#c5d4e0";//style>class
      var icon = document.querySelector('#DLIcon');
      icon.innerHTML = "brightness_5";
      document.cookie = "MODE=LIGHT ; path=/";
    }else{
      body.style.transition = "background-color 1s ease";

      body.classList.add('dark-mode');
      body.style.backgroundColor = "#0e1724";//style>class
      var icon = document.querySelector('#DLIcon');
      icon.innerHTML = "brightness_7";
      document.cookie = "MODE=DARK ; path=/";
    }

  }