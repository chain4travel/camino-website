const axios = require('axios');

module.exports = async function () {
	const url = 'https://api.strapi.camino.network/news-article-caminos?sort=date%3Adesc&populate=*&pagination[limit]=-1';
	try {
		const response = await axios.get(url);
		return response.data;
		} catch (error) {
    console.error('Error fetching data:', error);
    // Handle error here (e.g., throw error or return default data)
	}
};
