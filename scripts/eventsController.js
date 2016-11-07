var fileSystem = require('fs');

module.exports.get = function(request, response) {
  var event = fileSystem.readFileSync('app/data/event/' + request.params.id + '.json', 'utf8');
  response.setHeader('Content-Type', 'application/json');
  response.send(event);
};

module.exports.save = function(request, response) {
  var event = request.body;
  fileSystem.writeFileSync('app/data/event/' + request.params.id + '.json', JSON.stringify(event));
  response.send(event);
}
