import {renderContent, createHtmlElement, clearContent} from './page-loader';
import {renderNav} from './nav-bar';
import {renderFooter} from './footer';
import {renderHome} from './home-page';
import {renderMenu} from './menu-page';
import {renderAbout} from './about-page';


function showHome(){
    clearContent();
    renderNav();
    renderHome();
    renderFooter();
}
function showMenu(){
    clearContent();
    renderNav();
    renderMenu();
    renderFooter();
}
function showAbout(){
    clearContent();
    renderNav();
    renderAbout();
    renderFooter();
}

showHome();

document.addEventListener('click', (e)=>{
    const target = e.target.textContent;
    console.log(target);

    if(target == 'HOME') showHome();
    if(target == 'MENU' || target == "See menu") showMenu();
    if(target == 'ABOUT') showAbout();
});