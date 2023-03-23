export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const objParam = await fetch(`${BASE_URL}${query}`);
  const objParamJson = await objParam.json();
  // if (objParamJson.results.length === 0) {
  //   throw new Error('Termo de busca não informado');
  // }
  // console.log(objParamJson.results);
  return objParamJson.results;
};

(fetchProductsList('computador'));

export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const BASE_URL = 'https://api.mercadolibre.com/items/';
  const objParam = await fetch(`${BASE_URL}${id}`);
  const objParamJson = await objParam.json();
  // console.log(objParamJson);
  return objParamJson;
};
