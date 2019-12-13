const ebay = require('../services/ebay');
const sendMail = require('../controllers/mailsend');

function searchEbay(keywords, email, alert) {
  CLIENTID = 'ArielBet-OwlWatch-PRD-8388a6d5f-b7f9fc0e';
  ebay.get(`v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${CLIENTID}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=3&keywords=${keywords}`)
    .then(function (response) {
      if(response.data.findItemsByKeywordsResponse[0].searchResult[0].length == 0) {
        return ({
          "error" : "Sem resultados para essa palavra"
        });
      }
      items = response.data.findItemsByKeywordsResponse[0].searchResult[0].item.map(i => {return {id:i.itemId[0],title:i.title[0],image:i.galleryURL[0],price:i.sellingStatus[0].currentPrice[0].__value__,priceID:i.sellingStatus[0].currentPrice[0]["@currencyId"],viewURL:i.viewItemURL[0]}});
      sendMail(email, alert, keywords, items);
      console.log(items)
    })
    .catch(function (error) {
      console.log(error);
    })
}

module.exports = searchEbay;
