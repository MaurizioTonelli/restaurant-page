import {renderContent, createHtmlElement, pageArticle} from './page-loader';

function render(){
    let $article = pageArticle();
    let $canvas = $article.querySelector('.main');
    $canvas.classList.add('home-canvas');
    let $content = createHtmlElement('p', `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `);
    let $title = createHtmlElement('h1', 'About us');
    $title.classList.add('page-title');
    $canvas.appendChild($title);
    $canvas.appendChild($content);
    renderContent($article);
}

export {render as renderAbout};