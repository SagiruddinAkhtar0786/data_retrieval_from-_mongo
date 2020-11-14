// connection to the mongodb
const mongo = require("mongoose");
mongo.connect("mongodb://localhost:27017/mangodemo",{ useNewUrlParser: true,useUnifiedTopology:true })
.then(()=> console.log("connection successfull..."))
.catch((err) => console.log(err));

// schema
// A mongoose schema defines the structure of the document, default valus , validator, etc..
const playlistScheme = new mongo.Schema({
    name: {
        type :String,
        required : true},
    ctype : String,
    videos : Number,
    author : String,
    active : Boolean,
    date:{
        type:Date,
        default : Date.now
    }
})


// collection creation
const playlsitModel = new mongo.model("playlist",playlistScheme);
module.exports = playlsitModel;

