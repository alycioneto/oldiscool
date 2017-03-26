module.exports = function(app) {
    const SponsorModel = app.models.sponsor;

    return {
        getAll: async function(req, res) {
            try {
                const sponsor = await SponsorModel.find();
                res.json({ success: true, sponsor });
            } catch (err) {
                res.json({ success: false, messages: err.errors});
            }
        },
        save: async function(req, res) {
            if(req.body) {
                var sponsor = new SponsorModel(req.body)
                try {
                    await sponsor.save();
                     res.status(200).json({ success: true });
                } catch(err) {
                    res.json({ success: false, messages: err.errors });
                }
            } else {
                res.status(204).json({ success: false, messages:'no content'});
            }
        },
         delete: async function(req, res) {
            if(req.body) {
                try {
                    await SponsorModel.remove({ _id: req.body._id });
                    res.status(200).json({ success: true });
                } catch(err) {
                    res.json({ success: false, messages: err})
                }
            } else {
                res.status(204).json({ success: false, messages:'no content'});
            }
        },
         update: async function(req, res) {
            if(req.body) {
                const query = { _id: req.body._id };
                delete req.body._id;
                const set = { $set: req.body };
                const options = {multi: false, upsert: false};
                try {
                    await SponsorModel.update(query, set, options);
                    res.status(200).json({ success: true });
                } catch (err) {
                    res.json({ success: false, messages: err});
                }
            } else {
                res.status(204).json({ success: false, messages:'no content'});
            }
        }
    }
}