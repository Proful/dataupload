var bee = require("beeline");
var main = require("./main");

var router = bee.route({
  "/css/bootstrap.css":bee.staticFile("./public/css/bootstrap.css","text/plain"),
  "/js/jquery.min.js":bee.staticFile("./public/js/jquery.min.js","text/plain")
});

router.add({
  "/": main.home,
  "/overview": main.overview,
  "/feature-heading": main.featureHeading,
  "/features": main.features
});


require("http").createServer(router).listen(8001);
