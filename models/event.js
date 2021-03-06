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
        ticketLoteId: { type: Schema.Types.ObjectId, required: true },
        saleDate: { type: Date, required: true, default: new Date() },
        ticketAmount: { type: Number, required: true, default: 1 }
    });

    const EventTicketLots = new Schema({
        name: { type: String, required: true, default: "" },
        price: { type: Number, required: true, default: 0 },
        totalAmount: { type: Number, required: true, default: 0 },
        bought: { type: Number, required: true, default: 0 }
    });

    const EventSchema = new Schema({
        title: { type: String, required: true, default: '' },
        description: {type: String, required: true, default: ''},
        startDate: { type: Date, required: true, default: new Date() },
        endDate: { type: Date, required: true, default: new Date() },
        imageUrl: { type: String, required: false, default: "" },
        sponsors: [ EventSponsorsSchema ],
        buyers: [ EventBuyersSchema ],
        ticketLots: [ EventTicketLots ]
    });

    return app.config.db.model('events', EventSchema);
}