var albumModel = require('../models/albumModel');

/**
 * albumController.js
 *
 * @description :: Server-side logic for managing albums.
 */

module.exports = {

    /**
     * albumController.list()
     */
    list: function (req, res) {
        albumModel.find(function (err, albums) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting album.',
                    error: err
                });
            }
            return res.json(albums);
        });
    },

    /**
     * albumController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        albumModel.findOne({_id: id}, function (err, album) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting album.',
                    error: err
                });
            }
            if (!album) {
                return res.status(404).json({
                    message: 'No such album'
                });
            }
            return res.json(album);
        });
    },

    /**
     * albumController.create()
     */
    create: function (req, res) {
        var album = new albumModel({
			artist : req.body.artist,
			title : req.body.title,
			comments : req.body.comments
        });

        album.save(function (err, album) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating album',
                    error: err
                });
            }
            return res.status(201).json(album);
        });
    },

    /**
     * albumController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        albumModel.findOne({_id: id}, function (err, album) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting album',
                    error: err
                });
            }
            if (!album) {
                return res.status(404).json({
                    message: 'No such album'
                });
            }

            album.artist = req.body.artist ? req.body.artist : album.artist;
			album.title = req.body.title ? req.body.title : album.title;
			album.comments = req.body.comments? req.body.comments : album.comments;
			
            album.save(function (err, album) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating album.',
                        error: err
                    });
                }

                return res.json(album);
            });
        });
    },

    /**
     * albumController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        albumModel.findByIdAndRemove(id, function (err, album) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the album.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};