module.exports = function (app) {
    const controller = app.controllers.buyer;

    app.get('/api/buyers', controller.getAll);
}