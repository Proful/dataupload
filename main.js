var fs = require("fs");
var jade = require("jade");

// Read the jade template file from tmpl folder
// Compile to html
// Send the response to browser
var render = function(req,res,tmplName,data){
  var path = __dirname + "/tmpl/" + tmplName + ".jade";
  var tmpl = fs.readFileSync(path).toString();
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(jade.compile(tmpl,{filename:path})({data:data}));
};

var home = function(req,res){
  var data = {
    meta: {
      title: "ALF Speedup!!"
    }
  };
  render(req,res,"home",data);
};

var overview = function(req,res){
  render(req,res,"overview");
};

var featureHeading = function(req,res){
  render(req,res,"feature-heading");
};

var features = function(req,res){
  render(req,res,"features");
};

exports.home = home;
exports.overview = overview;
exports.featureHeading = featureHeading;
exports.features = features;
