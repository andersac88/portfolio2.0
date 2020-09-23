let express = require('express');

let app = express();
let PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
	console.log('App listening on PORT ' + PORT);
});
