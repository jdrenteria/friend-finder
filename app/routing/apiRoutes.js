var friends = require("../data/friends");

module.exports = function (app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        var totalDifference = 0;
        var bestMatch ={
            name="",
            photo="",
            friendDifference:1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function(item){
            return parseInt(item, 10);
        });
        userData ={
            name: req.body.name,
            photo: req.body.photo,
            scores = b
        }
    });
};