export const fetchProductsList = async (query) => {
  try {
    const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    const objParam = await fetch(`${BASE_URL}${query}`);
    const objParamJson = await objParam.json();
    if (objParamJson.results.length === 0 || !query) {
      throw new Error('Termo de busca não informado');
    }
    // console.log(objParamJson.results);
    return objParamJson.results;
  } catch (error) {
    throw new Error('Termo de busca não informado');
  }
};

(fetchProductsList('computador'));

export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  try {
    const BASE_URL = 'https://api.mercadolibre.com/items/';
    const objParam = await fetch(`${BASE_URL}${id}`);
    const objParamJson = await objParam.json();
    // console.log(objParamJson);
    return objParamJson;
  } catch (error) {
    throw new Error('ID não informado');
  }
};
