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
        Board.remove({_id: req.params.board_id}, function(err, output) {
            if(err){
                return res.status(500).json({error: "database failure"});
            }
            res.status(204).end();
        })
    });

    //get all board
    app.get('/api/boards', function(req, res) {
        Board.find(function(err, board) {
            if(err){
                return res.status(500).send({err: "database failure"});
            }
            res.json(board);
        })
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