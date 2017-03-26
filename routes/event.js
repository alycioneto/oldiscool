module.exports = function(app) {
    const controller = app.controllers.event;

    app.get('/api/events', controller.getFuture);
}