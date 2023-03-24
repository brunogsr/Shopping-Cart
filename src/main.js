import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID } from './helpers/cartFunctions';

let buttonAddCart;

const poggers = async (event) => {
  const productID = event.target.parentNode.firstChild.innerText;
  const carrinhoList = document.querySelector('.cart__products');
  // console.log(carrinhoList);
  // console.log(eventHtml);
  const product = await fetchProduct(productID);
  const cartProduct = createCartProductElement(product);
  carrinhoList.appendChild(cartProduct);
  saveCartID(productID);
};

const productScreen = async () => {
  try {
    const listResults = await fetchProductsList('computador');
    const sectionHtml = document.getElementsByClassName('products');
    listResults.forEach((produto) => {
      sectionHtml[0].appendChild(createProductElement(produto));
    });
    buttonAddCart = document.querySelectorAll('.product__add');
    buttonAddCart.forEach((element) => element.addEventListener('click', poggers));
    const loadingDOM = document.getElementsByClassName('loading')[0];
    loadingDOM.parentElement.removeChild(loadingDOM);
  } catch (error) {
    const sectionHtml = document.querySelector('.products');
    const h1Const = document.createElement('h1');
    h1Const.classList = 'error';
    h1Const.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    sectionHtml.appendChild(h1Const);
    const loadingDOM = document.getElementsByClassName('loading')[0];
    loadingDOM.parentElement.removeChild(loadingDOM);
  }
};

document.querySelector('.cep-button').addEventListener('click', searchCep);

// console.log(getSavedCartIDs());

window.onload = () => {
  productScreen();
};
