module.exports = function(app) {
	app.get('/contatos', function(req, res) {
		res.json(contatos);
	});

	// app.post('/contatos', function(req, res) {
	// 	console.log(req.body)
	// 	res.json(true);
	// });

	
	
};


var contatos = [
	{
		id: 1
		,nome: 'Wilde'
		,telefone: '554499606007'
	},
	{
		id: 2
		,nome: 'Rossi'
		,telefone: '554499735011'
	}
];