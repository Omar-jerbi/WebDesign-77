function cardToFG(id){
    var body = document.querySelector('body');
    if(!body.classList.contains('dark-mode')){
      
      if(!body.classList.contains("dark-mode") &&  body.style.backgroundColor != "black"){
        body.style.backgroundColor = "black";
        
        var cardS = document.querySelectorAll('.card');
        cardS.forEach(element => {
          if(element.id != id){
            element.style.zIndex = "-1";
          }
        });
        
        var cards = document.querySelectorAll('.cards');
        cards.forEach(element => {
          element.style.backgroundColor = "#00000070";
        });
      }
      else  {
        body.style.backgroundColor = "#c5d4e0";
        
        var cardS = document.querySelectorAll('.card');
        cardS.forEach(element => {
          if(element.id != id){
            element.style.zIndex = "unset";
          }
        });

        var cards = document.querySelectorAll('.cards');
        cards.forEach(element => {
          element.style.backgroundColor = "unset";
        });
      }
      
    }
  
  };