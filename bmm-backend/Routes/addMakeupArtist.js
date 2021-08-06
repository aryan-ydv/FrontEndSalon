const express = require("express");
let AddMakeupArtist = require("../models/addMakeupArtist");
const app = express()
app.use(express.json());


app.post("/", (req, res) => {
    const makeupArtistName = req.body.makeupArtistName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const pinCode = req.body.pinCode;
    const travelToOutstation = req.body.travelToOutstation;
    const ladiesServices = req.body.ladiesServices;
    const gentsServices = req.body.gentsServices;
    const airBrushBridalMakeup = req.body.airBrushBridalMakeup;
    const guestMakeup = req.body.guestMakeup;
    const trialMakeup = req.body.trialMakeup;
    const travelPolicy = req.body.travelPolicy;
    const paymentPolicy = req.body.paymentPolicy;
    const cancellationPolicy = req.body.cancellationPolicy;
    const payments = req.body.payments;

    const addmakeupartist = new AddMakeupArtist({
        makeupArtistName,
        email,
        phoneNumber,
        address,
        city,
        state,
        pinCode,
        travelToOutstation,
        ladiesServices,
        gentsServices,
        airBrushBridalMakeup,
        guestMakeup,
        trialMakeup,
        travelPolicy,
        paymentPolicy,
        cancellationPolicy,
        payments
    });
    addmakeupartist.save().then(() => {
        res.status(201).json({message: "makeupartist data is added!", data: addmakeupartist});
    }).catch((err) => {
        res.status(400).json(err);
    });
});

module.exports = app;
