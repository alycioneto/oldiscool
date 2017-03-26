module.exports = function(app) {

    return {
        getAll: function(req, res) {
            return res.json({ success: true })
        }
    };
};