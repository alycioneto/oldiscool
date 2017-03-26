module.exports = function(app) {
    const controller = app.controllers.event;

    app.get('/api/events', controller.getAll);
    app.get('/api/events/future', controller.getFuture);
    app.get('/api/events/past', controller.getPast);
    app.get('/api/event/:id', controller.getOne)
}