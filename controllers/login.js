module.exports = function(app) {
    var sess;
    return {
        login: function(req, res) {
            if (!req.body.username || !req.body.password) {
                res.json({ success: false});    
            } else if(req.body.username === app.user && req.body.password === app.password) {
                req.session.user = app.user;
                res.json({ success: true});
            }
        },
        logout: function(req, res) {
            req.session.destroy();
            res.json({ success: true});
        },
    };
}