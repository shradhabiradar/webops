const express = require('express');
const expressLayout = require('express-ejs-layouts');
const { RequestHeaderFieldsTooLarge } = require('http-errors');
const port = 4000;
const app = express();
const db = require('./config/mongoose');
const shortUrl = require('./model/urlshortner')


app.set(expressLayout);
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async function(req, res){
    const shorturls = await shortUrl.find();
    res.render('url', { 
        shorturls: shorturls,
    });
})

app.post('/shorturl', function(req, res){
    shortUrl.create({
        full: req.body.fullUrl
    });
    return res.redirect('back');
})


app.get('/:urls', async function(req, res){
    const shorturl = await shortUrl.findOne({
        short: req.params.urls,
    })

    return res.redirect(shorturl.full);
})

app.get('/delete/:id', async function(req, res){
    console.log(req.query);
    let id = req.query.id;
    const deleteUrl = shortUrl.findByIdAndDelete(id);
    return res.redirect('back');
})



app.listen(port, function(err){
    if(err){console.log(`error in coneecting ${err}`);
    console.log(`successfully connected to the port ${port}`);
    }
})