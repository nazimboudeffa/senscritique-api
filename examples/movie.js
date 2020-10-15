var senscritique = require('../index');

senscritique('Pulp_Fiction/445539', function(err, data) {
  if(err)
    console.log(err.stack);
  if(data)
    console.log(data);
});
