var path = require('path');
var rootPath = path.normalize( __dirname + '../../');

module.exports = {
    development:{
        db: 'mongodb://localhost:27017',
        port: process.env.PORT || 1337,
        rootPath: rootPath,

    },
    production: {
        db: 'mongodb://localhost:27017',
        port: process.env.PORT || 1337,
        rootPath: rootPath
    }
};