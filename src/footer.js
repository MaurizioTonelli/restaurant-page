import {renderContent, createHtmlElement} from './page-loader';

function render(){
    const $footer = createHtmlElement('footer');
    const $text = createHtmlElement('p', 'Maurizio Tonelli, 2021');
    $footer.appendChild($text);
    renderContent($footer);
}

export {render as renderFooter};