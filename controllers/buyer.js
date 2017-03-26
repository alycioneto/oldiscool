module.exports = function(app) {
    const BuyerModel = app.models.buyer;
    
    return {
        getAll: async function(req, res) {
            try {
                const buyers = await BuyerModel.find();
                res.json({ success: true, buyers });
            } catch (err) {
                res.json({ success: false, messages: err.errors});
            }
        },
        delete: async function(req, res) {
            if(req.body) {
                try {
                    await BuyerModel.remove({ _id: req.body._id }, function (err) {
                        if (!err) {
                            res.status(200).json({ success: true });
                        } else {
                            res.json({ success: false, messages: err})
                        }
                    });
                } catch(err) {
                    res.json({ success: false, messages: err})
                }
            } else {
                res.status(204).json({ success: false, messages:'no content'});
            }
        },
    }
}