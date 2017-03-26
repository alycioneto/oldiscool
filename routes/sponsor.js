module.exports = function (app) {
    const controller = app.controllers.sponsor;
    const auth = app.middlewares.auth;

    app.get('/api/sponsor', controller.getAll);
    app.post('/api/sponsor', auth, controller.save);
    app.post('/api/sponsor/delete', auth, controller.delete);
    app.post('/api/sponsor/update', auth, controller.update);
}