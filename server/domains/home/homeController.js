// Creando los Actions Methods
// GET "/"
// GET "/index"
const home = (req, res) => {
    // 1. Generando el view-model
    const viewModel = {
        title: 'Express',
        author: 'Vanesa Riaño',
    };

    res.render('home/home', viewModel);

};

// 2. Madamos a generar la vista con el Template Engine
//GET"/about"
const about = (req, res) => {
    const viewModel = {
        appVersion: '0.0.0',
    };
    res.render('home/about', viewModel);
};

// Exportando el Controlador
export default { home, about }

