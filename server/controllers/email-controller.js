var nodemailer = require('nodemailer'),
    emailSettings = require('../config/config').email;

function sendEmail(mailOptions){
    var response;
    var smtpConfig = emailSettings.stmpConfig;
    var transporter = nodemailer.createTransport(smtpConfig);

    //return 'mail function returning';

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            return 'nodemailer' + error;
        }

        console.log('Message sent: ' + info.response);
        return  'Message sent: ' + info.response;
    });
}

var emailCtrl = {
    sendFromJSON: function(req,res){
        console.log('body = ' + req.body);
        //from and to set by default in config.js
        var mailOptions = emailSettings.mailOptions;
        mailOptions.subject = 'Contact from ' + req.source;
        //this should be a thing that trys to parse JSON...
        mailOptions.text = 'Name:' + req.body.name + ' Email:' + req.body.email + 'Message: ' + req.body.message;
        //mailOptions.html = '';

       res.send(sendEmail(mailOptions));
        //res.send('api working');
    }
};

module.exports = emailCtrl;

//Demo code

/*// create reusable transporter object using the default SMTP transport
 var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

 // setup e-mail data with unicode symbols
 var mailOptions = {
 from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
 to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
 subject: 'Hello ✔', // Subject line
 text: 'Hello world 🐴', // plaintext body
 html: '<b>Hello world 🐴</b>' // html body
 };

 // send mail with defined transport object
 transporter.sendMail(mailOptions, function(error, info){
 if(error){
 return console.log(error);
 }
 console.log('Message sent: ' + info.response);
 });*/