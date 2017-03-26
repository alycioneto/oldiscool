module.exports  = function() {
    return function(req, res, next) {
    if (req.session && req.session.user === user)
        return next();
    else
        return res.sendStatus(401);
    };
}