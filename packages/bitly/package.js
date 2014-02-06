Package.describe({
	summary: "Bitly Package"
});

Package.on_use(function (api) {
	api.add_files('bitly.js', 'server');
	if(api.export)
		api.export('Bitly');
});