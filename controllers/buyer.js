module.exports = function(app) {
    const BuyerModel = app.models.buyer;
    
    return {
        get: async function(req, res) {
            try {
                const buyers = await BuyerModel.find();
                res.json({ success: true, buyers });
            } catch (err) {
                res.json({ success: false, messages: err.errors});
            }
        }
    }
}