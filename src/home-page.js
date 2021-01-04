import {renderContent, createHtmlElement, pageArticle} from './page-loader';

function render(){
    let $article = pageArticle();
    let $canvas = $article.querySelector('.main');
    $canvas.classList.add('transparent');
    $canvas.classList.add('home-canvas');
    let $content = createHtmlElement('h2', 'welcome');
    let $slogan = createHtmlElement('p', "World's finest chocolate");
    let $button = createHtmlElement('button', 'See menu');
    let $title = createHtmlElement('h1', 'Le Chocolat');
    $title.classList.add('page-title');
    $canvas.appendChild($title);
    $canvas.appendChild($content);
    $canvas.appendChild($slogan);
    $canvas.appendChild($button);
    renderContent($article);
}

export {render as renderHome};