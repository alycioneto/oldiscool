module.exports = function(app) {
    var sess;
    return {
        login: function(req, res) {
            if (!req.query.username || !req.query.password) {
                res.json({ success: false});    
            } else if(req.query.username === user || req.query.password === password) {
                req.session.user = user;
                req.session.admin = true;
                res.json({ success: true});
            }
        },
        logout: function(req, res) {
            req.session.destroy();
            res.json({ success: true});
        }
    };
}