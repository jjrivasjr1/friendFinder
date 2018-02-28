var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {

		var  bestmatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		console.log(req.body);
		//hERE WE TAKE THE RESULT OF THE USER'S SURVEY post AND PARSE IT
		var userData = req.body;
		var userSocres = userData.scores;

		console.log(userScores);//THIS IS THE ISSUE, DOESN'T KNOW WHAT THIS IS. 

		//This varia le will calculate the difference between the user's scores and the scores of 
		// each user in the database
		var totalDifference = 0;
		// Here we loop through all the friend possibilities in the database.
		for (var i = 0; i <friends.length; i++) {

			console.log(friends[i]);
			totalDifference = 0;
			//we then loop through all the scores of each friend
			for (var j = 0; j < friends[i].scores[j]; j++) {
				//we claculate the difference between the scores and the sum them into the totalDifference
				totalDifference += Math.abs(parseInt(userScores[j] + parseInt(friends[i].scores[j]));

				if (totalDifference += bestMatch.friendDifference) {
					//Reset the bestMatch to be the new friend.
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
					
				}
			}
		}
		//finally sev the user's data to the database (thishas to happen AFTER the check. otherwise, 
		// the databse will always return tht the user is the user's best friend).
		friends.push(userDtat);

		//Return a JSON with the user's bestMatch. This eill be used by the HTMl in the next page
		res.json(bestMatch);		

	});
}