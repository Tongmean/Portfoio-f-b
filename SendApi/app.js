const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyparser = require('body-parser');
const cors = require('cors');
const nodemailler = require('nodemailer');
const sendGridTtansporter = require('nodemailer-sendgrid-transport');


require('dotenv').config();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const transporter = nodemailler.createTransport(

    sendGridTtansporter({
        auth:{
            api_key: process.env.API_SENDFRIND
        }
    })
)

app.post("/sendmail",(req,res) => {

    const {name, email, jobtypes, message } = req.body;

    transporter.sendMail({
        to:"tongmeanfc@gmail.com",
        from:"tongmeanfc@gmail.com",
        subject:"Job offer",
        html:"<h5>Detail</h5>",
      

            

        

    });
    res.json({name, email, })
});



app.listen(PORT,(req,res)=>{
    console.log("Server Connected")
});