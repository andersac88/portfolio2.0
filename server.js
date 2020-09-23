let express = require('express');
let blog = require('./apis/blog');
let portfolio = require('./apis/portfolio');

let app = express();
let PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
	console.log('App listening on PORT ' + PORT);
});

app.get('/api/blog', (req, res) => {
	return res.json(blog);
});

app.get('/api/portfolio', (req, res) => {
	return res.json(portfolio);
});
