const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.zillow.com/professionals/real-estate-agent-reviews/')
  .then(response => {
    const $ = cheerio.load(response.data);
    const agents = [];

    $('main div footer.Spacer-c11n-8-50-1__sc-17suqs2-0 div.Flex-c11n-8-50-1__sc-n94bjd-0 SEOFooter__SEOFooterContainer-u38u4o-1').each((i, el) => {
      const agency = $(el).find('div.Flex-c11n-8-50-1__sc-n94bjd-0 ul li a').text().trim();
      agents.push({ agency });
    });

    console.log(agents);
  })
  .catch(error => {
    console.log(error);
  });
