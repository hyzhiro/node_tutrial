
var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'node',
  password: 'node',
  database: 'node_test',
});

var query = connection.query('select * from users;', function(err,results,fields){
  console.log('start---');
  console.log(results);
  console.log('end---');
  //console.log(fields);
});
