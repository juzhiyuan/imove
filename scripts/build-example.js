var ghpages = require('gh-pages');

ghpages.publish('example/dist', function(err) {
   if (err) {
        console.log(err)
   } else {
       console.log("build example sucess")
   }
});