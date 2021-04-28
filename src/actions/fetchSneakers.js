import axios from 'axios';
/*
const StockXAPI = require('stockx-api');
const stockX = new StockXAPI();
*/
export const fetchSneakers = (input) =>{
    const options = {
        method: 'GET',
        url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
        params: {limit: '12', name: input},
        headers: {
          'x-rapidapi-key': '7d4de103e6mshc9810f2c57f7695p12e084jsna81e5d82aa08',
          'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
        }
    };

    return async(dispatch) =>{
       const response = await axios.request(options);
       dispatch({type: 'FETCH_SNEAKERS', payload: response.data.results });
        console.log(response.data.results);
    };
};

export const clearSneakers = () => {
    return { type: 'CLEAR_SNEAKERS' };
};

//26ef1001f6mshc63a9af19adf746p1e10c7jsn137d1a37a56b
//c3e4abf43fmshd1a427860e3e7a0p14a82ajsn4e8d173aa552
