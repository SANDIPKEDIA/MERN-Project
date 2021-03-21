const mongoose = require('mongoose')

//declare database
const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,  //for remove deprication warning
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}).then(() => {
    console.log("connection successfully");
}).catch((err) =>
    console.log('no connection'));