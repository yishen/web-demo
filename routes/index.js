
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(
      'index', 
  {
      title: 'hello world' 
  }
 );
};

exports.demo= function(req, res){
  res.render(
      'demo', 
  { 
      title: 'This is Demo page',
      header: 'demo demo demo demo ...' 
  }
 );
};

exports.app= function(req, res){
  res.render(
      'bootstrap', 
  { 
      title: 'This is bootstrap',
      header: 'many many content...' 
  }
 );
};