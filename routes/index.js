const Board = require('../models/board')

module.exports = function(app) {
    //post board
    app.post('/api/boards', function(req, res) {
        let board = new Board();
        board.title = req.body.title;
        
        board.save(function(err) {
            if(err) {
                console.error(err)
                res.json({result: 0})
                return
            }
            res.json({result: 1})
        });
    });

    //delete board
    app.delete('/api/boards/:board_id', function(req, res) {
        res.end();
    });

    //get all board
    app.get('/api/boards', function(req, res) {
        res.end();
    });

    //post post
    app.post('api/boards/:post_id', function(req, res) {
        res.end();
    });

    //delete post
    app.delete('api/boards/:post_id', function(req, res) {
        res.end();
    });

    //get all post
    app.get('api/boards/:board_id', function(req, res) {
        res.end();
    });

    

}