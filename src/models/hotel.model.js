let mongoose = require('mongoose')

const protocol = 'mongodb'
const server = 'cluster0.ftk4c.mongodb.net'
const port = 80
const db = 'iqBooking'
const user = 'iqbooking_u0'
const password = 'iNxU7kzACv9GGAig'
const uri = 'mongodb+srv://iqbooking_u0:iNxU7kzACv9GGAig@cluster0.ftk4c.mongodb.net/iqBooking?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
    }).catch(err => console.log(err.reason));


mongoose.set('useCreateIndex', true);

let hotelSchema = new mongoose.Schema({
    name: String,
    strars: Number,
    address: {
        city: String,
        location: [Number]
    },
    description: String
})

module.exports = mongoose.model('Hotel', hotelSchema)

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://iqbooking_u0:iNxU7kzACv9GGAig@cluster0.ftk4c.mongodb.net/iqBooking?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });