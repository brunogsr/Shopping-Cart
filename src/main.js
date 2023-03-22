import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const Poggers = async () => {
  const listResults = await fetchProductsList('computador');
  const sectionHtml = document.getElementsByClassName('products');
  // console.log(listResults);
  listResults.forEach((produto) => {
    sectionHtml[0].appendChild(createProductElement(produto));
  });
};

Poggers();

document.querySelector('.cep-button').addEventListener('click', searchCep);
