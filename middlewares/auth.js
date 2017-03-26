module.exports  = function(app) {
    return function(req, res, next) {
    if (req.session && req.session.user === app.user)
        return next();
    else
        return res.sendStatus(401).json({success: false});
    };
}