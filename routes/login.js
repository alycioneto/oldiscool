
module.exports = function(app) {
    const controller = app.controllers.login;
    const auth = app.middlewares.auth;

    app.post('/api/login',controller.login);
    app.get('/api/logout', controller.logout);
    app.get('/api/test', auth,controller.test);
}