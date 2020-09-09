const sendEmail = (req, res,transporter) => {
    const {email,topic,date,time,link,description} = req.body
       let mailOptions = {
        from: 'opkfirebase@gmail.com', // sender address
        to: "omar@hov.co", // list of receivers
        subject: 'Appointment Request', // Subject line
        html: `
      <h1>You have recieved an order</h1>
      <h3>Email: ${email} </h3>
      <h3>Topic: ${topic} </h3>
      <h3>date: ${date} </h3>
      <h3>Time: ${time} </h3>
      <h3>Link: ${link} </h3>
      <h3>Description: ${description} </h3>
      <p>To accept or reject the appointment visit the website <a href="#">Here</a></p>
      `
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          res.json('err')
        else
          res.json('info');
      });
}
const sendUserEmail = (req, res,transporter,db) => {
  const {id} = req.body
      db.select('*').from('users').where('id', '=', id).then(user=>{
        let mailOptions = {
          from: 'embpoints@gmail.com', // sender address
          to: user[0].email, // list of receivers
          subject: 'VQPoints: You have Recieved points', // Subject line
          html: '<h1>You have revieved Points</h1><br><p>This is a message from XEMBX Reward System. <br> You have points waiting in your account for you. <br> https://vainqueurpoints.herokuapp.com <br> https://www.xembx.com</p>'// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if(err)
            res.json('err')
          else
            res.json('info');
        });
      })

    
    
}
module.exports={
    sendEmail,
    sendUserEmail
}