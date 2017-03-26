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
        save: async function(req, res) {
            if(req.body) {
                try {
                    let buyer = await BuyerModel.findOne({email: req.body.email}).exec()
                    if(!buyer){
                        req.body.eventsCount = 0;
                        buyer = new BuyerModel(req.body); 
                    } 
                    buyer.eventsCount++;
                    buyer.save();
                    res.json({ success: true, buyer });
                } catch (err) {
                    res.json({ success: false, messages: err.errors });
                }
            } else {
                res.status(204).json({ success: false, messages:'no content'});
            }
        },
        delete: async function(req, res) {
            if(req.body) {
                try {
                    await BuyerModel.remove({ _id: req.body._id }, function (err) {
                        res.status(200).json({ success: true });
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