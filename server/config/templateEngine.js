import exphbs from 'express-handlebars';
import path from 'path';

// app: Instancia de express 
export default (app) => {
	//configurar el motor de plantillas de express 
	//usando express-handlebars
	// 1. Registrar el motor de plantillas
	app.engine('hbs', exphbs({
		extname: '.hbs',
		defaultlayout: 'main'
	})
	);

	// 2. Seleccionar el motor de plantillas
	app.set('view engine', 'hbs');

	// 3. Establecer la ruta de las vistas 
	app.set('views', path.join(__dirname, '..', 'views'));

	// 4. Retornar la instancia express
	return app;

};

