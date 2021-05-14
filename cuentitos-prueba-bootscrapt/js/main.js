document.addEventListener('DOMContentLoaded', function(){
    /**CONTENIDO DE LA BARRA DE NAVEGACION */
    const burgerIcon = document.getElementById('burger');
    const responsiveMenu = document.getElementById('responsive-menu');
    var activeResponsiveMenu = false;

    function openResponsiveMenu(){
        responsiveMenu.classList.remove('hide-responsive-menu');
        activeResponsiveMenu = true;
    }
    function closeResponsiveMenu(){
        responsiveMenu.classList.add('hide-responsive-menu')
        activeResponsiveMenu = false;
    }

    burgerIcon.addEventListener("click", () => {
        if(activeResponsiveMenu === false){
            openResponsiveMenu();
        }else{
            closeResponsiveMenu();
        }
    });

    /**Activar barra de busqueda al hacer click en la lupa */
    const xlNavLinks = document.getElementById('xl-nav-link');
    const xlLupa = document.getElementById('xl-lupa');
    const search_bar = document.getElementById('search-bar');
    var activeXlNavLinks = false;
    function openSearchBar(){   
        xlNavLinks.classList.add('d-none');
        search_bar.classList.remove('d-none');
        activeXlNavLinks = true;
    }
    function closeSearchBar(){
        xlNavLinks.classList.remove('d-none');
        search_bar.classList.add('d-none');
        activeXlNavLinks = false;
    }
    xlLupa.addEventListener("click", () => {
        if(activeXlNavLinks === false){
            openSearchBar();
        }else{
            closeSearchBar();
        }
    });

    /**PAGINA DE REGISTRO (register.html) */
    /**registro normal */
    const profesor_normal = document.getElementById('profesor-normal');
    const alumno_normal = document.getElementById('alumno-normal');
    const clave_profesor_normal = document.getElementById('clave-profesor-normal');
    let profesor_normal_bool = false;
    let alumno_normal_bool = false;

    function click_profesor_normal(){
        if(profesor_normal_bool === false){
            alumno_normal.style.backgroundColor = "#ddfffa";
            profesor_normal.style.backgroundColor = "#6375bd";
            clave_profesor_normal.classList.remove('d-none');
            alumno_normal_bool = false;
            profesor_normal_bool = true;
        }
    }
    function click_alumno_normal(){
        if(alumno_normal_bool === false){
            profesor_normal.style.backgroundColor = "#ddfffa";
            alumno_normal.style.backgroundColor = "#6375bd";
            clave_profesor_normal.classList.add('d-none');
            profesor_normal_bool = false;
            alumno_normal_bool = true;
        }
    }
    
    profesor_normal.addEventListener("click", () => {
        click_profesor_normal();
    });
    alumno_normal.addEventListener("click", () => {
        click_alumno_normal();
    });

    /**registro rapido */
    const profesor_rapido = document.getElementById('profesor-rapido');
    const alumno_rapido = document.getElementById('alumno-rapido');
    const clave_profesor_rapido = document.getElementById('clave-profesor-rapido');
    let profesor_rapido_bool = false;
    let alumno_rapido_bool = false;

    function click_profesor_rapido(){
        if(profesor_rapido_bool === false){
            alumno_rapido.style.backgroundColor = "#ebedf7";
            profesor_rapido.style.backgroundColor = "#7f818a";
            clave_profesor_rapido.classList.remove('d-none');
            alumno_rapido_bool = false;
            profesor_rapido_bool = true;
        }
    }
    function click_alumno_rapido(){
        if(alumno_rapido_bool === false){
            profesor_rapido.style.backgroundColor = "#ebedf7";
            alumno_rapido.style.backgroundColor = "#7f818a";
            clave_profesor_rapido.classList.add('d-none');
            profesor_rapido_bool = false;
            alumno_normal_bool = true;
        }
    }

    profesor_rapido.addEventListener("click", () => {
        click_profesor_rapido();
    });
    alumno_rapido.addEventListener("click", () => {
        click_alumno_rapido();
    })

    /**PROFILE ALUMNO*/
    
});