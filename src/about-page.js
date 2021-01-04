import {renderContent, createHtmlElement, pageArticle} from './page-loader';

function render(){
    let $article = pageArticle();
    let $canvas = $article.querySelector('.main');
    let $content = createHtmlElement('p', `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `);
    let $title = createHtmlElement('h1', 'About us');
    $title.classList.add('page-title');
    let $map = document.createElement('div');
    $map.innerHTML = 
    `
    <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=paris%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    `;
    $canvas.appendChild($title);
    $canvas.appendChild($content);
    $canvas.appendChild($map);
    renderContent($article);
}

export {render as renderAbout};