module.exports = function(app) {
    const validator = require('validator');
    const mongoose = require('mongoose');
    const Schema = require('mongoose').Schema;

    const EventSponsorsSchema = new Schema({
        name: { type: String, required: true, default: "" },
        siteUrl: { type: String, required: false, default: "" },
        logoUrl: { type: String, required: false, default: "" }
    });

    const EventBuyersSchema = new Schema({
        email: { 
            type: String, 
            required: true, 
            default: "", 
            validate: { 
                validator: validator.isEmail,
                message: '{VALUE} não é um email válido'
            } 
        },
        name: { type: String, required: true, default: "" },
        facebookUrl: { type: String, required: false, default: "" },
        donateType: { type: String, required: true, default: "" },
        donateAmount: { type: Number, required: true, default: 1 },
        saleDate: { type: Date, required: true, default: new Date() },
        ticketAmount: { type: Number, required: true, default: 1 }
    });

    const EventDonateTypes = new Schema({
        name: { type: String, required: true, default: "" },
        min: { type: Number, required: true, default: 1 },
        total: { type: Number, required: true, default: 1 }
    });

    const EventSchema = new Schema({
        title: { type: String, required: true, default: '' },
        startDate: { type: Date, required: true, default: new Date() },
        endDate: { type: Date, required: true, default: new Date() },
        imageUrl: { type: String, required: false, default: "" },
        sponsors: [ EventSponsorsSchema ],
        buyers: [ EventBuyersSchema ],
        donateTypes: [ EventDonateTypes ]
    });

    return app.config.db.model('events', EventSchema);
}