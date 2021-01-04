import {renderContent, createHtmlElement, pageArticle} from './page-loader';

let chocolateTypes = {
    white: {
        title: 'White Chocolate',
        src: './img/white_chocolate.jpg',
        text: 'Lorem ipsum dolor sit amet',
        price: '$15'
    },
    dark: {
        title: 'Dark Chocolate',
        src: './img/dark_chocolate.jpg',
        text: 'Lorem ipsum dolor sit amet',
        price: '$25'
    },
    milk: {
        title: 'Milk Chocolate',
        src: './img/milk_chocolate.jpg',
        text: 'Lorem ipsum dolor sit amet',
        price: '$5'
    }
};

function chocolateCard(chocolate){
    let $card = document.createElement('div');
    $card.classList.add('chocolate-card');
    let $title = createHtmlElement('h3', chocolate.title);
    let $image = document.createElement('img');
    $image.src = chocolate.src;
    let $text = createHtmlElement('p', chocolate.text);
    let $price = createHtmlElement('p', chocolate.price);
    $price.classList.add('price');
    $card.appendChild($title);
    $card.appendChild($image);
    $card.appendChild($text);
    $card.appendChild($price);
    return $card;
}

function render(){
    let $article = pageArticle();
    let $canvas = $article.querySelector('.main');
    let $title = createHtmlElement('h1', 'Selection');
    $title.classList.add('page-title');
    let $darkChocolateCard = chocolateCard(chocolateTypes.dark);
    let $whiteChocolateCard = chocolateCard(chocolateTypes.white);
    let $milkChocolateCard = chocolateCard(chocolateTypes.milk);    
    $canvas.appendChild($title);
    $canvas.appendChild($darkChocolateCard);
    $canvas.appendChild($whiteChocolateCard);
    $canvas.appendChild($milkChocolateCard);
    renderContent($article);
}

export {render as renderMenu};