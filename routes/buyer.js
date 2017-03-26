module.exports = function (app) {
    const controller = app.controllers.buyer;
    const auth = app.middlewares.auth;

    app.get('/api/buyers', controller.getAll);
    app.post('/api/buyers/delete', auth, controller.delete);
    app.post('/api/buyers', auth, controller.save);
}