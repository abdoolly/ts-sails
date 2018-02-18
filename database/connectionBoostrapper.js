let modelsBootstrapper = require('./../utilities/bootstrap/modelsBootstrapper').modelsBootstrapper;

let exportable = modelsBootstrapper.loadBootsrappers()
    .then(() => {

        console.log('models loaded ');

    })
    .then(() => {

        return require('./../config/connection.json');

    })
    .catch(err => console.log(err));


module.exports = exportable;