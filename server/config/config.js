var path = require('path');
var rootPath = path.normalize( __dirname + '/../../');

console.log(__dirname);
console.log('rootPath: ' + rootPath);

module.exports = {
    development:{
        db: 'mongodb://localhost:27017/sc',
        port: process.env.PORT || 1337,
        rootPath: rootPath
    },
    production: {
        db: 'mongodb://localhost:27017/sc',
        port: process.env.PORT || 1337,
        rootPath: rootPath
    },
    email: {
       smtpConfig: {
           host: 'box1026.bluehost.com',
           port: 465,
           secure: true,
           auth: {
               user: 'karl@sanfordconsulting.com',
               pass: 'Change05!'
           }
       },
        mailOptions: {
            from: 'karl@sanfordconsulting.com',
            to: 'karl@sanfordconsulting.com'
        }
    }
};