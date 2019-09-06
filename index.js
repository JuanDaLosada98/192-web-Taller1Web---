function paginaCargada(){



    function selector(ruta){
        let elemento = document.querySelector(ruta);
        if(elemento != null){
            return elemento;
        }else{
            alert(" El identificador " + ruta + " es invilado");
        }
    }

    var menus = {};

    menus.actual = selector(".contendor-menu-normal");
    menus.secundarioLocacion = selector(".contenedor-menu-normal-secundario");
    menus.secundario = selector(".mainnav");

    menus.actualLocation = selector(".header__topright");
    menus.otraLocation = selector(".contendor-menu-responsive");


    menus.responsive = selector(".contendor-menu-responsive");
    menus.menuHambugesa = selector(".nav-responsive__logo");


    menus.menuHambugesa.addEventListener("click", ()=>{
        menus.responsive.classList.toggle("view-menu") ;

    });

    function menuAcomodar(){
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;

        this.console.log(w)

        if(w <= 640){
            menus.responsive.appendChild(menus.actual);
            menus.responsive.appendChild(menus.secundario);
        }else{
            menus.actualLocation.appendChild(menus.actual);
            menus.secundarioLocacion.appendChild(menus.secundario);
        }
    }
 
    menuAcomodar();
    window.addEventListener('resize', (event) => {

        menuAcomodar();
    });
}

window.addEventListener("load", paginaCargada);