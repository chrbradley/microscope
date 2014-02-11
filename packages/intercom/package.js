Package.describe({
	summary: "Intercom Package"
});

Package.on_use(function (api){
	api.add_files('intercom_loader.js', 'client');
});