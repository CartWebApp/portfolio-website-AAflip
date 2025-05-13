document.addEventListener('DOMContentLoaded', () => {
    let checkBox = document.getElementById('menuCheck');
    let navBar = document.getElementById('navigation');
    let closeBox = document.getElementById('menuCheckOff');

    checkBox.addEventListener('change', () => {
        if(checkBox.checked){
            navBar.style.width = '500px';
        }else{
            navBar.style.width = '0';
        }
    });

    closeBox.addEventListener('change', () => {
        if(checkBox.checked){
            checkBox.checked = false;
            closeBox.checked = false;
            navBar.style.width = '0';
        }
    });
});