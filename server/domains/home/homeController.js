// Creando los Action Methods 
// GET "/"
//GET "/index"
const home = (req, res) => {
    // 1. Generando view-model 
    let viewModel = {
        title: 'Express',
        author: 'Vanesa Riaño'
    };

    // 2. Mandamos a generar la vista con el Template Engine
    res.render('home. viewModel');
};

// Exportando el Controlador 
export default { home };