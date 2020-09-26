const Applications = [
	{
		App: 'Hangman',
		Image: './Assets/Images/Medieval Hangman.png',
		Title: 'Medieval Hangman',
		appURL: 'https://andersac88.github.io/Word-Guess-Game/',
		codeURL: 'https://github.com/andersac88/Word-Guess-Game',
		Details: `This is your standard game of hangman but with a medieval theme.
			Users start the game by pressing any letter key, which will be the first guess.
			Each subsequent key stroke will be logged as either a correct or incorrect guess.
			Correct guesses will be input into the guess word. Incorrect guesses will be logged and one will be deducted from your remaining guesses.If you run out of guesses, you lose the round, if you guess the word you win.`,
		Technology: 'Javascript, Google Fonts, HTML and CSS',
	},
	{
		App: 'Giftastic',
		Image: './Assets/Images/Simpsons.png',
		Title: 'Giftastic Simpsons',
		appURL: 'https://andersac88.github.io/GifTastic/',
		codeURL: 'https://github.com/andersac88/GifTastic/',
		Details:
			"This is a program to run gifs from the Giphy APIBy clicking the name of a Simpsons character in the top row 10 still images will be displayed below. If the name is double clicked, 20 images will be displayed. If you click on one of the still images, they will become animated. If clicked again, it will freeze. If you would like to see Gifs of a character that is not included, simply type their name in the search bar under 'Add a Character' and click submit. A button will populate above and if clicked, 10 stills will be displayed below and if double clicked, 20 stills will be displayed. As referenced above, if you click on the stills they will become animated. To add a gif to favorites, double cick on it. To display the favorites, click on the favorites button, to remove a gif from this lists click on the image. ",
		Technology: 'Giphy API, jQuery, Google Fonts, Bootstrap, HTML and CSS ',
	},
	{
		App: 'Trivia',
		Image: './Assets/Images/WW2 Trivia.png',
		Title: 'WWII Trivia',
		appURL: 'https://andersac88.github.io/TriviaGame/',
		codeURL: 'https://github.com/andersac88/TriviaGame/',
		Details:
			'This is a timed trivia game. Users are presented with a question and four answers. They are given 15 seconds to select an answer. If an incorrect answer is selected, the user is notified that their selection was incorrect and the correct answer will be displayed along with an image related to the correct answer. If a correct answer is selected, the user is notified that they were correct and an image related to the correct answer will be display. If the user fails to make a selection within the alloted 15 seconds, they will be notified that time has expired and the correct answer, along with an image related to the correct answer, will be displayed. Once the user has been presented with all of the questions the game ends and the total number of correct answers, incorrect answers and unanswered questions will be displayed, along with a replay button. ',
		Technology: 'jQuery, Google Fonts, Bootstrap, HTML and CSS ',
	},
	{
		App: 'Train Scheduler',
		Image: './Assets/Images/TrainScheduler.png',
		Title: 'Train Scheduler',
		appURL: 'https://andersac88.github.io/Train-Scheduler/',
		codeURL: 'https://github.com/andersac88/Train-Scheduler/',
		Details:
			"This application is a fictional train scheduling app You input a 'Train Name', a 'Destination', the time of the first train and their frequency. The app will then output when the next tain will arrive and how many minutes that is from the current time, which is displayed in the Jumbotron. Trains can also be deleted by clicking the respective Delete button. ",
		Technology:
			'Firebase, moment JS, Google Fonts, CSS, Bootstrap, HTML and jQuery ',
	},
	{
		App: 'LIRI Bot',
		Image: './Assets/Images/liribot.png',
		Title: 'Language Interpretation and Recognition Interface Bot',
		appURL: '#',
		codeURL: 'https://github.com/andersac88/LIRI_Bot',
		Details:
			'This is a a command line node application that takes in specific parameters [concert-this, spotify-this-song, movie-this & do-what-it-says] and gives back information pulled from various APIs. ',
		Technology: 'jsNode, javascript, NPMs and APIs ',
	},
	{
		App: 'Bamazon',
		Image: './Assets/Images/Bamazon.png',
		Title: 'Bamazon - MySQL Inquirer',
		appURL: '#',
		codeURL: 'https://github.com/andersac88/Node.js-MySQL',
		Details:
			'This is a MySQL based application that pulls displays data pulled from a database on the command line which users interact with using the inquirer NPM. ',
		Technology: 'jsNode, javascript, NPMs and MySQL ',
	},
	{
		App: 'Friend Finder',
		Image: './Assets/Images/friendfinder.png',
		Title: 'Friend Finder',
		appURL: 'https://warm-fortress-99870.herokuapp.com/',
		codeURL: 'https://github.com/andersac88/Friend_Finder',
		Details:
			'This is a full-stack web application that takes user input in the form of a survey and matches you with another user by comparing survey answers. ',
		Technology: 'jsNode, javascript, jQuery, Bootstrap, express and Heroku ',
	},
	{
		App: 'Concert Buddy',
		Image: './Assets/Images/ConcertBuddy.png',
		Title: 'Concert Budddy',
		appURL: 'https://concertbuddy2.herokuapp.com',
		codeURL: 'https://github.com/andersac88/ConcertBuddy',
		Details:
			"This is a full-stack web application allows users to find like-minded individuals to attend concerts with. Just search for your concert, click I'm going! and voila! You're now connected to everyone else that's also riding solo and looking for a pal. A real-time chat room is active for every event and makes connecting a breeze.  ",
		Technology:
			'Node & Express MySQL DB and Sequelize Both GET and POST routes Deployed with Heroku Passport for authentication Google Maps API SongKick API Socket.IO for chatting Handlebars Bootstrap, CSS, HTML ',
	},
	{
		App: 'Political Scraper',
		Image: './Assets/Images/NewsScraper.png',
		Title: 'Political Scraper',
		appURL: 'https://political-scraper.herokuapp.com/',
		codeURL: 'https://github.com/andersac88/News_Scraper',
		Details:
			'Web Application that scrapes political articles from www.politicalwire.com and stores these articles on a Mongo database. These articles are then pulled from the database and displayed so that users can comment on each article. ',
		Technology:
			'MongoDB, Mongoose, Node, Express, Handlebars, Axios, Cheerio, Javascript, CSS, HTML, Bootstrap, Heroku ',
	},
	{
		App: 'Peerless Vending',
		Image: './Assets/Images/Peerless.png',
		Title: 'Peerless Vending',
		appURL: 'https://www.peerlessvending.com/',
		codeURL: 'https://github.com/andersac88/PeerlessVending',
		Details:
			'React website for a small business that has a contact form which utilizes nodemailer. ',
		Technology:
			'Nodemailer, Node, Express, Axios, Javascript, CSS, HTML, Bootstrap, Heroku ',
	},
];

module.exports = Applications;
