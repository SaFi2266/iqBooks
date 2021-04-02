let HotelModel = require("../models/hotel.model");
let express = require("express");
let router = express.Router();

// Create a new Hotel
// POST localhost:3000/hotel
router.post("/hotel", (req, res) => {
    if (!req.body) {
        return res.status(400).send("Request body is missing");
        }
    if (!req.body.name) {
    // ...
    }

    // let hotel = {
    // name: 'HotelName',
    // strars: '3',
    // address: {cityName, [lat, lon]},
    // description: 'client description for his/her hotel'
    // }

    let model = new HotelModel(req.body);
    model
        .save()
        .then((doc) => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
                }
            res.status(201).send(doc);
            })
        .catch((err) => {
            res.status(500).json(err);
            });
});

// GET
router.get("/hotel", (req, res) => {
    if (!req.query.name) {
        return res.status(400).send("Missing URL parameter: name");
        }
    HotelModel.findOne({
        name: req.query.name,
        })
        .then((doc) => {
            res.json(doc);
            })
        .catch((err) => {
            res.status(500).json(err);
    });
});

// UPDATE
router.put("/hotel", (req, res) => {
    if (!req.query.name) {
        return res.status(400).send("Missing URL parameter: name");
        }
    HotelModel.findOneAndUpdate(
        {
            name: req.query.name,
            },
        req.body,
        {
            new: true,
            })
        .then((doc) => {
            res.json(doc);
            })
        .catch((err) => {
            res.status(500).json(err);
            });
});

// DELETE
router.delete("/hotel", (req, res) => {
    if (!req.query.name) {
        return res.status(400).send("Missing URL parameter: name");
        }
    HotelModel.findOneAndRemove({
        name: req.query.name,
        })
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;
