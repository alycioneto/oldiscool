module.exports = function(app) {
    const EventModel = app.models.event;

    return {
        getFuture: async function(req, res) {
            const today = new Date();
            const query = { startDate: { gte: today } };

            try {
                const events = await EventModel.find(query).exec();
                res.json({ success: true, events });
            } catch(err) {
                res.json({ success: false, messages: err.errors });
            }
        },
        save: async function(req, res) {
            console.log(req.body);
            if(req.body) {
                var event = new EventModel(req.body)
                try {
                    await event.save(function(err){
                        if(!err) {
                            res.json({ success: true });
                        } else {
                            res.json({ success: false, messages: err.errors });
                        }
                    });
                } catch(err) {
                    res.json({ success: false, messages: err.errors });
                }
            }
        },
    };
};