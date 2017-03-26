module.exports = function(app) {
    const validator = require('validator');
    const mongoose = require('mongoose');
    const Schema = require('mongoose').Schema;

    const BuyerSchema = new Schema({
        email: { type: String, required: true, default: "",},
        name: { type: String, required: true, default: "" },
        facebookUrl: { type: String, required: false, default: "" },
        eventsCount: { type: Number, required: false, default: 0 }
    });

    return app.config.db.model('buyers', BuyerSchema);
}