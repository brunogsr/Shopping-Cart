import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('testa fetchProductsList com o argumento computador se fetch foi chamada', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledTimes(1)
  });

  it('testa fetchProductsList com o argumento computador se fetch foi chamada com URL correto', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it('testa fetchProductsList com o argumento computador retorna os dados de computadorSearch', async () => {
    const result = await fetchProductsList('computador');
    expect(result).toEqual(computadorSearch);
  });

  it('fetchProductsList deve retornar um erro com a mensagem "Termo de busca não informado" caso entregue um parâmetro inválido', async () => {
    await expect(fetchProductsList()).rejects.toEqual(new Error('Termo de busca não informado'));
  });
  

})

  // it('fetch é chamado ao executar fetchProductsList', () => {

  // });

  // it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {

  // });

  // it('...', () => {
  // });
