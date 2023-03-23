import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const Poggers = async () => {
  try {
    const listResults = await fetchProductsList('computador');
    const sectProduct = document.getElementsByClassName('products');
    // console.log(listResults);
    const loadingDOM = document.querySelector('h1.loading');
    loadingDOM.remove();
    listResults.forEach((produto) => {
      sectProduct[0].appendChild(createProductElement(produto));
    });
  } catch (error) {
    sectProduct.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    sectProduct.classList.add('error');
  }
};

Poggers();

document.querySelector('.cep-button').addEventListener('click', searchCep);
