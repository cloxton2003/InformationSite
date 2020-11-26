const express = require("express");
const app = express();

app.listen(80, ()=> {
	console.log('server started, listening to port 80');
});

app.use(express.static('views', {
	extensions: ['html']
}));
app.use(express.static('public'));


app.use((req, res, next) => {
	res.status(404).send('Oooooopppss');
});