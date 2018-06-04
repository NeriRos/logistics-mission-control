module.exports = function(express, log, mongoose) {
	var router = express.Router();

	router.route('/subtitles')
		.get((req, res, next) => {
			
		})
		.post((req, res, next) => {
			const postData = req.body;
			log.debug("Got a post request!");

			
		});

	return router;

}
