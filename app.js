const mailer = require('nodemailer')
 let transport=mailer.createTransport({
    service:'gmail',
    auth:{
        user:'user123@gmail.com', //enter your email here
        pass:'user@123'//enter your password here
    }
 })

 let messageOb ={
    from:'user123@gmail.com',//Enter email to send from
    to:'user123@gmail.com',//Enter email send To okay 
    subject:'EMAIL USING NODE JS',
    text:'This email is send using node js. btw Hello How are you?'
 }

 transport.sendMail(messageOb,(err,info) => {
    if(error){
        console.log(error)
    }else{
        console.log("Email sent succesfully");
        console.log(info.response);
    }
 })