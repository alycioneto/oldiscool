module.exports = function(app) {
    const controller = app.controllers.event;
    const auth = app.middlewares.auth;

    app.get('/api/events', controller.getAll);
    app.post('/api/events', auth, controller.save);
    app.get('/api/events/future', controller.getFuture);
    app.get('/api/events/past', controller.getPast);
    app.get('/api/event/:id', controller.getOne);
    app.post('/api/events/delete', auth, controller.delete);
    app.post('/api/events/update', auth, controller.update);
}