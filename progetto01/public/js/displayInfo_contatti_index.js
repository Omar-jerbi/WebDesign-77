function displayInfo(cognome, tipo){
    document.querySelector('#'+tipo).style.opacity = '0';
    document.querySelector('#'+tipo).style.height= '0';
    
    document.querySelector('#info-'+tipo).style.opacity = '10';
    document.querySelector('#info-'+tipo).style.height= 'auto';

    document.querySelector('#info-'+tipo).querySelector('#'+cognome).style.opacity = '10';
    document.querySelector('#info-'+tipo).querySelector('#'+cognome).style.height = 'auto';
  }