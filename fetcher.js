const args= process.argv;
const web = args[2];
const path = args[3];


const request = require('request');
request(web, function (error, response, body) {
  //console.error('error:', error); 
  //console.log('statusCode:', response && response.statusCode); 
  //console.log('body:', body); 

  console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  const fs = require('fs');
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
      return;
    }
  });

});


