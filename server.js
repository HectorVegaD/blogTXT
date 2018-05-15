const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const route = require('./routes/route');

const PORT = process.env.PORT || 3000;

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.enable('html', require('ejs').renderFile);

// app.use(express.static(path.join(__dirname, 'client')));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', route);

app.use(cors());

//const index = require('./routes/index');
//const blogs = require('./routes/blogs');
//Body parser Middleware
app.use(bodyParser.json());

//Static folder containing angular files, in this case the client folder
app.use(express.static(path.join(__dirname, 'client')));

app.use('/api', route);

app.get('/', (req, res) =>{
    res.send('what');
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}... `));