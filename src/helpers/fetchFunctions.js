export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  try {
    if (!query) throw new Error('Termo de busca não informado');
    const BASE_URL = 'https://api.gdsfgmerdfsgdgcadolibre.fgfcom/sites/MLB/search?q=';
    const objParam = await fetch(`${BASE_URL}${query}`);
    const objParamJson = await objParam.json();
    // console.log(objParamJson.results);
    return objParamJson.results;
  } catch (error) {
    throw new Error('Termo de busca não informado');
  }
};

// console.log(fetchProductsList());
