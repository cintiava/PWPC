// Importando el Router de Express 
import { Router } from 'express';
// Importando e controlador 
import homeController from './homeController';
// Creando instancia del enrutador 
const router = new Router();

//Enrutamos 
// GET '/'
router.get(['/', '/home', '/index'], homeController.home);

// Exporto el tramo de ruta 
export default router;