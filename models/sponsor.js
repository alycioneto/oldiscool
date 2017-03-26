module.exports = function(app) {
    const mongoose = require('mongoose');
    const Schema = require('mongoose').Schema;

    const SponsorSchema = new Schema({
        name: { type: String, required: true, default: "" },
        siteUrl: { type: String, required: false, default: "" },
        logoUrl: { type: String, required: false, default: "" }
    });

    return app.config.db.model('sponsor', SponsorSchema);
}