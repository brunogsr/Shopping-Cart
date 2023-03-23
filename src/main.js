import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const Poggers = async () => {
  try {
    const listResults = await fetchProductsList('computador');
    const sectionHtml = document.getElementsByClassName('products');
    listResults.forEach((produto) => {
      sectionHtml[0].appendChild(createProductElement(produto));
    });
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

Poggers();

document.querySelector('.cep-button').addEventListener('click', searchCep);
