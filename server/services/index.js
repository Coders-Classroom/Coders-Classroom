//
var path = require('path');

module.exports = function(app, parentPath) {

        // Add Routes
        require('./GitLab')(app, path.join(parentPath, '/gitlab'));
        
        /*
        // 404 error
        app.use(function(req, res) {
            res.json({"error":"API Endpoint not found."}, 404);
        });
        */
};