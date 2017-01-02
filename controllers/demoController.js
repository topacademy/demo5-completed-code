/**
 * demoController.js
 *
 * @description :: Server-side logic to demonstrate api call functionality.
 */
module.exports = {

    /**
     * demoController.list()
     */
    list: function (req, res) {
        res.end('GET request confirmed');
    },

    /**
     * demoController.show()
     */
    show: function (req, res) {
        res.end('GET request confirmed with id: ' + req.params.id);  
    },

    /**
     * demoController.create()
     */
    create: function (req, res) {
        res.end('POST request confirmed');
    },

    /**
     * demoController.update()
     */
    update: function (req, res) {
        res.end('PUT request confirmed with id: ' + req.params.id);
    },

    /**
     * demoController.remove()
     */
    remove: function (req, res) {
        res.end('DELETE request confirmed with id: ' + req.params.id);
    }
};