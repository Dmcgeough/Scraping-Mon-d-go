var request = require("request");
var cheerio = require("cheerio");

module.exports= function(app) {

    app.get("/scrape", function(req, res) {
    
        request("http://www.bbc.com/news", function(error, response, html) {
    
          
            var $ = cheerio.load(html);
    
            
            $(".gs-c-promo.nw-c-promo").each(function(i, element) {
    
              var heading = $(element).find("h3.gs-c-promo-heading__title").text();
              var raw_image = $(element).find("img").attr("data-src");
              if(raw_image){
                    var image = raw_image.replace("{width}", "400");
              }else{
                    var image = "http://www.globalinvestrealty.com/Photos/no_image.png";
              }
              var raw_summary = $(element).find("p.gs-c-promo-summary").text();
              if(raw_summary){
                  var summary = raw_summary;
                }
                else{
                    var summary = "You idiot just read the article";
                
              };
              var article = {
                  heading: heading,
                  image: image,
                  summary: summary
              };
              
            });
        });
      res.send("Scrape Complete");
    });
}