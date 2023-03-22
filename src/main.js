import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';

fetchProductsList('computador');

document.querySelector('.cep-button').addEventListener('click', searchCep);
