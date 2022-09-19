var selected = document.querySelector('#selected-page');
var under = document.createElement('div');
under.id="under";
selected.appendChild(under);


//click su titolo riamdna ad index
var titMobile = document.querySelector('#tit-sm-med');
titMobile.addEventListener('click', ()=>{
    window.open('../../../index.html', "_self");
})