

var toImports = [
  '/src/views/InstructionPage.js',
  '/src/router.js',
  '/src/index.js'
];

var loadJs = function(path){
  console.log('path',path)
  var el = document.createElement("script");
    el.type = "application/javascript";
    el.src = path;
    document.body.appendChild(el);
};

toImports.forEach(loadJs);