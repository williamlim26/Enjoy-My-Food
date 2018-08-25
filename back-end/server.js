const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || process.argv[2] || 8080
const cors = require('cors')
const indexRouter = require('./routes/index')
const makerSignUpRouter = require('./routes/makerSignUp')
const makerLogInRouter = require('./routes/makerLogIn')
const makerUpdateProfileRouter = require('./routes/makerUpdateProfile')
const storeImageRouter = require('./routes/storeImage')
const eaterSignUpRouter = require('./routes/eaterSignUp')
const eaterLogInRouter = require('./routes/eaterLogIn')
const cart = require('./routes/cart')

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/products', indexRouter)
app.use('/makerSignUp', makerSignUpRouter)
app.use('/makerLogIn', makerLogInRouter)
app.use('/eaterSignUp', eaterSignUpRouter)
app.use('/eaterLogIn', eaterLogInRouter)
app.use('/updateMakerProfile', makerUpdateProfileRouter)
app.use('/storeImage', storeImageRouter)
app.use('/cart', cart)

const URL = "mongodb://localhost:27017/db"
mongoose.connect(URL, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("Connected to db at /data/db/")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})