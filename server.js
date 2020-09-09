const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const email = require('./email')
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
  auth: {
         user: 'opkfirebase@gmail.com',
         pass: 'dmdvyztsxpnaktub'
     }
 });
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send('All Working') })
app.post('/appointmentemail', (req, res) => { email.sendEmail(req, res, transporter)})
app.listen(process.env.PORT || 3001, ()=> {
  console.log('app is running on port 3000');
})
