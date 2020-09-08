const express = require('express');
const og = require('open-graph');
var app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(bodyParser.json());
app.use(logger('dev'));

app.post("/",(req,res)=>{
    var url = req.body.url;
    var expression =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; 
    var regex = new RegExp(expression);
    if(!url.match(regex)){
        return res.status(400).send({
            message:"url format is not proper"
        })
    }
    og(url, function(err, meta){
        if(meta){
            var result = {
                title: meta.title,
                description: meta.description,
                image: meta.image.url
            }
            return res.status(200).send(result);
        }else{
            return res.status(400).send({
                message:`not able to fetch the data from the provided url (${url})`
            })
        }
    })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`listening to port ${PORT}`))

module.exports={app}