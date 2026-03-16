let closingButton=document.querySelector('.closing-button-side-menu');
let openingButton=document.querySelector('.side-menu-class');
let sideMenu=document.querySelector('.side-menu-container');

openingButton.addEventListener('click',()=>{
    sideMenu.classList.add('active');
})
closingButton.addEventListener('click',()=>
{
    sideMenu.classList.remove('active');
});

