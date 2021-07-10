//including express package
const express = require('express');
// running on this port
const port = 4000;
// using express by calling it
const app = express();
// setting up the ongoose
const db = require('./config/mongoose');
// using the schema
const shortUrl = require('./model/urlshortner')

// data sent in a http body, it parses the incoming request
app.use(express.urlencoded());

// setting up the view engine(ejs)
app.set('view engine', 'ejs');
app.set('views', './views');

//this get request fins the all the full urls and soterned urls from the database and render to the views
app.get('/', async function(req, res){
    const shorturls = await shortUrl.find();
    res.render('url', { 
        shorturls: shorturls,
    });
})

//this post request will create a url sent by the user and redirects bscks to the home
app.post('/shorturl', function(req, res){
    shortUrl.create({
        full: req.body.fullUrl
    });
    return res.redirect('back');
})

//when u click the shortend url the, one can find the shortened url in the url(e.g: localhost://6000/(shortened url) after the '/' so to send user to the destination we redirect to the url given by the user(the long url)
app.get('/:urls', async function(req, res){
    const shorturl = await shortUrl.findOne({
        short: req.params.urls,
    })
    return res.redirect(shorturl.full);
})

//delete the url
app.get('/delete/:id', async function(req, res){
    console.log(req.query);
    let id = req.query.id;
    const deleteUrl = shortUrl.findByIdAndDelete(id);
    return res.redirect('back');
})


//make app to listen on this port
app.listen(port, function(err){
    if(err){console.log(`error in coneecting ${err}`);
    console.log(`successfully connected to the port ${port}`);
    }
})
