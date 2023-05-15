const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
  params: {t: 'Wisdom', maxR: '1', size: 'medium', id: '731'},
  headers: {
    'X-RapidAPI-Key': '6759749ec2msh0570e118d24a1a4p107c43jsn1b1858e40a6b',
    'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});