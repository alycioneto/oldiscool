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
        }
    };
};