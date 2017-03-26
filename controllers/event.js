module.exports = function(app) {
    const EventModel = app.models.event;

    return {
        getFuture: async function(req, res) {
            const today = new Date();
            const query = { startDate: { gte: today } };
            const limit = req.query.limit;
            let findEvents = EventModel.find(query);

            if(limit && Number.isInteger(limit)) {
                findEvents = findEvents.limit(limit);
            }

            try {
                const events = await findEvents.exec();
                res.json({ success: true, events });
            } catch(err) {
                res.json({ success: false, messages: err.errors });
            }
        },
        getPast: async function(req, res) {
            const today = new Date();
            const query = { endDate: { lte: today } };
            const limit = req.query.limit;
            let findEvents = EventModel.find(query);

            if(limit && Number.isInteger(limit)) {
                findEvents = findEvents.limit(limit);
            }

            try {
                const events = await findEvents.exec();
                res.json({ success: true, events });
            } catch (err) {
                res.json({ success: false, messages: err.errors });
            }
        },
        getAll: async function(req, res) {
            const limit = req.query.limit;
            let findEvents = EventModel.find();

            if(limit && Number.isInteger(limit)) {
                findEvents = findEvents.limit(limit);
            }

            try {
                const events = await findEvents.exec();
                res.json({ success: true, events });
            } catch (err) {
                res.json({ success: false, messages: err.errors });
            }
        },
        getOne: async function(req, res) {
            try {
                const event = await EventModel.findById(req.params.id).exec()
                res.json({ success: true, event });
            } catch (err) {
                res.json({ success: false, messages: err.errors });
            }
        }
    };
};