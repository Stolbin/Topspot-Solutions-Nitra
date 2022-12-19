"use strict"

window.addEventListener('load', windowLoad);

function windowLoad() {
    document.documentElement.classList.add('loaded')

    const menu = document.querySelector(".menu");
    let menuActiveElement;
    
    if (menu) {
        menuActiveElement = document.querySelector('menu__active span');
        const menuActiveItem = menu.querySelector('menu__item._active');
        menuActiveElement ? menuActiveElement(menuActiveItem) : null;
        menu.addEventListener('click', menuActions);
    }    

    function menuActions(e) {
        const menuItem = e.target;
        if (menuItem.closest('.menu__item')) {
            const menuParentItem = menuItem.closest('.menu__item');
            const menuActiveItem = menu.querySelector('.menu__item._active');

            if (!menuParentItem.classList.contains('_active')) {
                menuActiveItem ? menuActiveItem.remove('_active') : null;                
            }
            menuSetActive(menuParentItem);
            e.preventDefault();
        }
    }

    function menuSetActive(menuParentItem) {
        menuParentItem.classList.add('_active');
        menuActiveElement.style.cssText = `
        heigth: ${menuParentItem.offsetHeigth}px;
        bottom: ${menuParentItem.offsetTop}px;
        background-color: ${menuParentItem.dataset.activeColor};
        `
    }
}