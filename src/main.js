import { searchCep } from './helpers/cepFunctions';
import './style.css';
import './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
