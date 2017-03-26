module.exports = function(app) {
    var sess;
    return {
        login: function(req, res) {
            if (!req.query.username || !req.query.password) {
                res.send('login failed');    
            } else if(req.query.username === user || req.query.password === password) {
                req.session.user = user;
                req.session.admin = true;
                res.send("login success!");
            }
        },
        logout: function(req, res) {
            req.session.destroy();
            res.send("logout success!");
        }
    };
}