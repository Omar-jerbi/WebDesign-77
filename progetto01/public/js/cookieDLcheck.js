window.addEventListener('load',()=>{
    if(document.cookie == "MODE=DARK"){
        var body = document.querySelector('body');
        body.classList.add('dark-mode');
        body.style.backgroundColor = "#0e1724";//style>class
        var icon = document.querySelector('#DLIcon');
        icon.innerHTML = "brightness_7";
        document.cookie = "MODE=DARK ; path=/";
    }else{
        document.cookie = "MODE=LIGHT ; path=/";
    }
});