
module.exports = function(app) {
    const controller = app.controllers.login;

    app.post('/api/login',controller.login);
    app.get('/api/logout', controller.logout);
}