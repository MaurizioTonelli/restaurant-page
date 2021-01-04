function renderContent(content){
    let $contentDiv = document.querySelector('#content');
    $contentDiv.appendChild(content);
}
function clearContent(){
    let $contentDiv = document.querySelector('#content');
    $contentDiv.innerHTML = '';
}
function createHtmlElement(element, content){
    let $element = document.createElement(element);
    if(content)
        $element.textContent = content;
    return $element;
}
function pageArticle(){
    let $articleWrapper = document.createElement('article');
    let $canvas = document.createElement('div');
    $canvas.classList.add('main');
    $articleWrapper.appendChild($canvas);
    return $articleWrapper;
}

export {renderContent, createHtmlElement, pageArticle, clearContent};