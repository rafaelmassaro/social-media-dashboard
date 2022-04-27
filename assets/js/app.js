const themeSwitch = document.querySelector('#change-theme');
const body = document.querySelector('body');

function toogleTheme(){
    if(themeSwitch.checked){
        body.classList.remove('dark-theme');
        body.classList.add('light-theme')
    }
    else{
        body.classList.remove('light-theme');
        body.classList.add('dark-theme')
    }
}

themeSwitch.addEventListener('change', toogleTheme)