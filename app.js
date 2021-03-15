const express= require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.set('port', process.env.PORT || 3000)

//IMPORTS
const postsRoute = require('./routes/post');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })) 
app.use('/', postsRoute);

//MIDDEELWARES
app.use('/posts', () => {
    console.log('this is middelware')
})

//ROUTES
app.get('/', (req, res) =>{
    console.log('connect')
})

//CONNECT DB
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
      )
.then(db => console.log('connected'))
.catch((db => console.log('no connected')))

//LISTENING
app.listen(app.get('port')
    ,() => {
    console.log(`running in the port ${app.get('port')}, ${process.env.DB_CONNECTION}`)
});