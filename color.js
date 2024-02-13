const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector("body");
const change =document.querySelector('h1') ;
//const change1 =document.querySelector("span") ;
const change2 =document.querySelector('h2') ;


buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
     console.log(e);
     console.log(e.target);
     if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
        change.style.color = 'white';
     }
     if(e.target.id ==='white'){
        body.style.backgroundColor = e.target.id;
        change.style.color = 'black';
        change2.style.color = 'black';
     }
     if(e.target.id ==='blue'){
        body.style.backgroundColor=e.target.id;
     }
     if(e.target.id === 'yellow'){
        body.style.backgroundColor=e.target.id;
        change.style.color = 'black';
        change2.style.color = 'black';
     }
    });
});