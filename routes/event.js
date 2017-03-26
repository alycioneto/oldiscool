module.exports = function(app) {
    const controller = app.controllers.event;
    const auth = app.middlewares.auth;

    app.get('/api/events', controller.getFuture);
    app.post('/api/events', auth, controller.save);
}