document.addEventListener('DOMContentLoaded', function(){
    const burgerIcon = document.getElementById('burger');
    const responsiveMenu = document.getElementById('responsive-menu');
    var activeResponsiveMenu = false;

    function openResponsiveMenu(){
        responsiveMenu.classList.remove('d-none');
        activeResponsiveMenu = true;
    }
    function closeResponsiveMenu(){
        responsiveMenu.classList.add('d-none')
        activeResponsiveMenu = false;
    }

    burgerIcon.addEventListener("click", () => {
        if(activeResponsiveMenu === false){
            openResponsiveMenu();
        }else{
            closeResponsiveMenu();
        }
    });
    
    /*const screenLG = window.matchMedia('(max-width:991px)');
    if(screenLG.matches === true){
        burgerIcon.classList.remove('d-none');
    }*/
});